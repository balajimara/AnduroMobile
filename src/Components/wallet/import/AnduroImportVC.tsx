import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Navigation } from "react-native-navigation";
import DocumentPicker from 'react-native-document-picker';
import { Button } from "@rneui/themed"
import { SafeAreaView,TouchableOpacity, View, Text, BackHandler, ScrollView } from "react-native";
import ImportSeedVW from "../../../Common/Views/importseeditem/ImportSeedVW";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import RNFS from 'react-native-fs';
import * as bip39 from 'bip39';
import { showToasterMsg } from "../../../Utility/AndurocommonUtils";

const AnduroImportVC = (props: any) => {
  const {t} = useTranslation()
  const [mnemonic, setMnemonic] = React.useState<string[]>([]);
  const [mnemonicFirst, setMnemonicFirst] = React.useState<string[]>([]);
  const [mnemonicSec, setMnemonicSec] = React.useState<string[]>([]);
  const [isShownToast, setIsShownToast] = React.useState<boolean>(false);
  const [toasttype, setToasttype] = React.useState<string>("");
  const [toastmessage, setToastMessage] = React.useState<string>("");


  const handleFileUpload = async () => {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.json],
        copyTo: 'cachesDirectory',
      });
      const fileContent = await RNFS.readFile(pickedFile.uri);
      try {
        const parsedWords = JSON.parse(fileContent);
        if (Array.isArray(parsedWords) && parsedWords.length === 12) {
          setMnemonic(parsedWords);
          setMnemonicFirst(parsedWords.slice(0,6))
          setMnemonicSec(parsedWords.slice(6,12))
        } else {
          showToast(t("invalidjsonformat"), "error");
        }
      } catch (error) {
        showToast(t("invalidjsonfile"), "error");
      }
  };


  const updateWord = (index: number, word: string) => {
    const updatedWords = [...mnemonic];
    updatedWords[index] = word.trim();
    setMnemonic(updatedWords);
    setMnemonicFirst(updatedWords.slice(0,6))
    setMnemonicSec(updatedWords.slice(6,12))
  };


  const validateMnemonic = () => {
    const isValid = bip39.validateMnemonic(mnemonic.join(" ").toLowerCase())
    if (!isValid) {
      const errorMessage = mnemonic.some((word: string) => word.trim() === "")
        ? t("mnemonic")
        : t("invalidseedphrase");
      showToast(errorMessage, "error");
      return;
    }
    Navigation.dismissAllOverlays();
    Navigation.push(props.componentId, {
      component: {
        name: 'AnduroCreate',
        passProps: {
        mnemonic: mnemonic.join(" ").toLowerCase()
        },
        options: {
          topBar: {
            visible: false,
          },
          bottomTabs: {
            visible: false,
          },
        },
      }
    });
  };

  const showToast = (message: string, type: string) => {
    setToastMessage(message);
    setToasttype(type);
    setIsShownToast(true);
  };
  
  React.useEffect(() => {    
    const backPressEvent = () => {
      Navigation.pop(props.componentId) 
      return true;
    }
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backPressEvent
    );
    return () => subscription.remove();    
  }, []);

  
  React.useEffect(() => {
    if (isShownToast) {
      showToasterMsg(toasttype, toastmessage)
      setIsShownToast(false);
    }
  }, [isShownToast]);

  React.useEffect(() => {
    setMnemonic(Array(12).fill(""));
    setMnemonicFirst(Array(6).fill(""));
    setMnemonicSec(Array(6).fill(""));
  }, []);

  return (
    <SafeAreaView>
  <View className="bg-gray h-full flex flex-col justify-between">
      <View className="p-14 pb-0 px-4">
      <ScrollView>
        <View className="m-auto mb-3 px-5 relative w-80">
          <Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("walletphrase")}</Text>
        </View>
        <View className="text-center mb-10">
          <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("importwallet")}</Text>
          </View>
          <View className="list-numbers mb-6 py-4 pb-3 flex-row flex-wrap">
            <View className="w-1/2">
              {mnemonicFirst.map((word: any, index: any) => (
                <ImportSeedVW key={index} index={index} word={word} onUpdateWord={updateWord} />
              ))}           
            </View>
            <View className="w-1/2">  
            {mnemonicSec.map((word: any, index: any) => (
                <ImportSeedVW key={index} index={index+6} word={word} onUpdateWord={updateWord} />
              ))}
            </View>
          </View>
          </ScrollView>
        <View className="px-2">
        <Button className="w-full"
         icon={{
              name: 'file',
              type: 'font-awesome',
              size: 16,
              color: 'white',
              // marginRight:4
            }}
          title="Import keys from a file"
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth:1,
            borderColor:'#514e4e',
            borderRadius: 8,
            height: 48,
            marginBottom:0
          }}
          containerStyle={{ borderRadius: 8 }}
          titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
          onPress={handleFileUpload}
        />
        </View>
      </View>
      <View className="px-6 py-5">
      <Button className="w-full"
        title="Login to wallet"
        buttonStyle={{
          backgroundColor: '#E8705C',
          borderWidth:1,
          borderColor: '#E8705C',
          borderRadius: 8,
          height: 48,
        }}
        containerStyle={{ borderRadius: 8 }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
        onPress={validateMnemonic}
      />
      </View>
    </View>
    </SafeAreaView>
  )
}

export default AnduroImportVC
