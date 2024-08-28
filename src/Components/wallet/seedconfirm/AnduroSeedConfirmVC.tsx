import React, { useState } from 'react';
import { View, Text,SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, ListItem, Dialog } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';

const AnduroSeedConfirmVC = () => {
    const [visible1, setVisible1] = useState(false);
    const toggleDialog1 = () => {
      setVisible1(!visible1);
    };
    const {t} = useTranslation()
    const changeBgColor = () => {
        styles.wrapper.backgroundColor = "#2E2825";
      };
    return (
        <SafeAreaView>
         <View className="bg-gray h-full flex flex-col justify-between">
          <View className="px-6">
           <View className="w-64 m-auto mb-4"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("confirmbackup")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("typenumber")}</Text>
           </View>
          <View className="max-h-[60%]">
           <ScrollView>
           <View>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl w-full"  onPress={changeBgColor}>
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl group-hover:bg-backuphighlightbg w-full">
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl group-hover:bg-backuphighlightbg w-full">
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl group-hover:bg-backuphighlightbg w-full">
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl group-hover:bg-backuphighlightbg w-full">
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl group-hover:bg-backuphighlightbg w-full">
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <View className="flex-row items-center justify-between bg-popupclr py-2 px-4 rounded-xl group-hover:bg-backuphighlightbg w-full">
                <View><Text className="text-walletLight text-sm mb-1 font-geistregular">Power</Text></View>
                <View className="py-1.5 w-14 border-transparent border"><Text className="text-center text-sm text-lightgray">x</Text></View>
               </View>
              </ListItem>
            </View>
            </ScrollView>
            </View>
          </View>
          <View className="w-full p-5 px-6 absolute bottom-0 bg-gray">
          <Button className="w-full"
              title="Skip"
              buttonStyle={{
                backgroundColor: 'transparent',
                borderWidth:1,
                borderColor:'#514e4e',
                borderRadius: 8,
                height: 48,
                marginBottom:15
              }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
              onPress={toggleDialog1}
            />
           <Button className="w-full"
              title="Continue"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderRadius: 8,
                height: 48,
              }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            />
          </View>
          <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute', bottom:20, }} isVisible={visible1} onBackdropPress={toggleDialog1} animation={"slideInUp"}>
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
         </View>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 14,
  },
  subtitleView: {
    color: '#000',
    padding:0
  },
  listView: {
    backgroundColor: '#231B19',
    borderRadius:12,
    padding:10,
    marginBottom:10
  }
});

export default AnduroSeedConfirmVC