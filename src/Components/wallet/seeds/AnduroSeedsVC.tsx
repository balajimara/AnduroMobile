import { View, Text,SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button } from "@rneui/themed"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import 'react-native-get-random-values';
import Clipboard from '@react-native-clipboard/clipboard';
import React, { useState } from 'react';
import { Navigation } from 'react-native-navigation';
import RNFS, {DownloadDirectoryPath, writeFile} from 'react-native-fs';
import SeedItemVW from "../../../Common/Views/seeditem/SeedItem"
import { generateMnemonic } from "../../../Utility/AndurocommonUtils"


const AnduroSeedsVC = (props: any) => {
    const {t} = useTranslation()
    const [mnemonic, setMnemonic] = useState<any>([])
    React.useEffect(() => {
      setTimeout(() => {
        setMnemonic(generateMnemonic().toString().split(" "))
      },1000)      
    },[])

    const copyToClipboard = () => {
      Clipboard.setString(mnemonic.join(" "));
    };

    const downloadMnemonic = async () => {
      try {
        var path = `${RNFS.DownloadDirectoryPath}/Anduro`;
        RNFS.mkdir(path);
        path += '/data.txt';
        // write the file
        RNFS.writeFile(path, JSON.stringify(mnemonic.split(" ")), 'utf8')
        .then((response: any) => {
            console.log('FILE WRITTEN!', response);
        })
        .catch((err:any) => {
            console.log(err.message);
        });
      } catch (e) {
        console.log('error', e);
      }
    };

    return (
        <SafeAreaView>
         <View className="bg-gray h-full flex flex-col justify-between">
          <View className="p-14 px-6">
           <View className="text-center w-56 m-auto mb-4"><Text className="text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("secret")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("createwalletsubdec")}</Text>
           </View>
           <View className="list-numbers mb-6 bg-popupclr px-4 py-4 pb-3 rounded-3xl flex-row flex-wrap">
           {mnemonic.length > 0 &&
            mnemonic.map((val: string, i: number) => (
               <View className="mb-3 w-1/2 px-4" key={i}>
                  {/*<SeedItemVW title={val} index={i+1}></SeedItemVW>*/}
                  <View className="border-b border-bottomLineTwo flex-row">
              <Text className="text-walletLight text-sm font-geistregular opacity-25 w-5">1</Text>
              <Text className="capitalize font-geistmedium text-xs text-walletLight text-sm">test</Text>
             </View>
               </View>
            ))}
           </View>
           <View className="flex-row flex-wrap mb-0">
            <View className="w-1/2 pr-1.5">
            <Button className="w-full bg-popupclr h-9 rounded-3xl text-lightgray"
              icon={{
                name: 'content-copy',
                size: 15,
                color: 'white',
                // opacity:0.55 
              }}
              title={t("copytoclipboard")}
              buttonStyle={{
                backgroundColor: '#231B19',
                borderRadius: 24,
                height: 40,
              }}
              titleStyle={{ fontFamily: 'Geist-Regular', fontSize: 12, opacity:0.55 }}
              onPress={() => copyToClipboard()}
            />
            </View>
            <View className="w-1/2 pl-1.5">
            <Button className="w-full bg-popupclr h-9 rounded-3xl text-lightgray"
              icon={{
                name: 'crop-free',
                size: 15,
                color: 'white',
                // opacity:0.55 
              }}
              title={t("downloadkeys")}
              buttonStyle={{
                backgroundColor: '#231B19',
                borderRadius: 24,
                height: 40,
              }}
              titleStyle={{ fontFamily: 'Geist-Regular', fontSize: 12, opacity:0.55 }}
              onPress={() => downloadMnemonic()}
            />
            </View>
           </View>  
           </View> 
          
           <View className="p-5">
            <Text className="font-geistregular text-center text-headingcolor text-xs font-normal mb-5">You’ll be asked to confirm the positions in the next step. Make sure you’ve backed these up somewhere</Text>
            <Button className="w-full"
              title="Continue"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderRadius: 8,
                height: 48,
              }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
              onPress={() => {
                Navigation.push(props.componentId, {
                    component: {
                      name: 'AnduroSeedConfirm',        
                    }
                })  
              }}
            />
           </View>
           
          </View>
         </SafeAreaView> 
    )
}

export default AnduroSeedsVC