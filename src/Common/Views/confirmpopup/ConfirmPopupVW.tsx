import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native"
import { Text, Dialog, Button } from "@rneui/themed"
import { useState } from "react"
import React from "react"
import { useTranslation } from "react-i18next"
import Icon from "react-native-vector-icons/FontAwesome"
import { Navigation } from "react-native-navigation"

interface confirmProps {
    mnemonic: string
    onClose: () => void
    isopen: Boolean,
    componentId?: string,
    onRedirectPage: () => void
  }
  
const confirmPopupVW = (props: confirmProps) => { 
    const {mnemonic, onClose, isopen, onRedirectPage, componentId} = props
    const {t} = useTranslation()
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        if (isopen) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }, [isopen])

  

    return (
      <SafeAreaView>
    <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute', bottom:20, }} isVisible={isVisible} onBackdropPress={() => onClose()} animation={"slideInUp"}>
    <View className="mt-2 mb-5 w-14 h-14 w-full-in h-auto-in opacity-70"><Icon name='crosshairs' size={50} color="#FAFAFA" /></View>
    <View className="mb-1 w-52"> 
    <Text style={styles.headtitle}>{t("secretrecoverytitle")}</Text>
    </View>
    <View className="opacity-70 pt-2 pb-4">
    <Text style={styles.subheadtitle} className="font-geistregular text-headingcolor text-xs mb-4">{t("secretrecoverytext")}</Text>
    <View className="mt-4"><Text style={styles.subheadtitle}>{t("secretrecoverysubtext")}</Text></View>
    </View>
    <View className="flex-row flex-wrap pt-4">
    <View className="w-1/2 pr-1">
        <Button className="w-full"
        title={t("nothanks")}
        buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth:1,
            borderColor:'#514e4e',
            borderRadius: 0,
            height: 40,
        }}
        titleStyle={{ fontFamily: 'Geist-SemiBold', fontSize: 14 }} 
        onPress={() => onRedirectPage()}
        />
    </View>
    <View className="w-1/2 pl-1">
    <Button className="w-full"
    title={t("letreview")}
    buttonStyle={{
        backgroundColor: '#E8705C',
        borderWidth:1,
        borderColor: '#E8705C',
        borderRadius: 0,
        height: 40,
    }}
    titleStyle={{ fontFamily: 'Geist-SemiBold', fontSize: 14 }}
    onPress={() => onClose()}
    />
    </View>
    </View>
    </Dialog>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 headtitle: {
    color:'#FAFAFA',
    fontSize: 18,
    marginBottom:1,
    fontFamily: 'Geist-SemiBold',
    lineHeight:24
 },
 subheadtitle: {
    fontFamily: 'Geist-Regular',
    color:'#968F8D',
    fontSize: 14
 }
 });

export default confirmPopupVW