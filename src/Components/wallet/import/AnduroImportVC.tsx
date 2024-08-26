import React, { useEffect } from "react";
import ImportSeedVW from "../../../Common/Views/importseeditem/ImportSeedVW";
import { Text } from "@rneui/themed";
import { useTranslation } from 'react-i18next';
import { Navigation } from "react-native-navigation";
import DocumentPicker from 'react-native-document-picker';
import { SafeAreaView,TouchableOpacity, View } from "react-native";
import RNFS from 'react-native-fs';
// @ts-ignore
import * as bip39 from 'react-native-bip39';

const AnduroImportVC = (props: any) => {
  const {t} = useTranslation()
  const [mnemonic, setMnemonic] = React.useState<string[]>([]);

  const handleFileUpload = async () => {
      const pickedFile = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.json],
      });
      const fileContent = await RNFS.readFile(pickedFile.uri);
      try {
        const parsedWords = JSON.parse(fileContent);
        if (Array.isArray(parsedWords) && parsedWords.length === 12) {
          setMnemonic(parsedWords);
        } else {
          console.error("Invalid JSON Format,Expected an array of 12 words");
        }
      } catch (error) {
        console.error("Invalid JSON file Format");
      }
  };


  const updateWord = (index: number, word: string) => {
    const updatedWords = [...mnemonic];
    updatedWords[index] = word.trim();
    setMnemonic(updatedWords);
  };



  useEffect(() => {
    setMnemonic(Array(12).fill(""));
  }, []);

  const validateMnemonic = () => {

    const isValid = bip39.validateMnemonic(mnemonic.join(" "))
    if (!isValid) {
      mnemonic.some((word: string) => word.trim() === "")
      ? console.error("Enter your mnemonic secret phrase")
      : console.error("Invalid seed phrase, please try again")
      return
    }
    Navigation.push(props.componentId, {
      component: {
        name: 'AnduroCreate',
        passProps: {
          type: { mnemonic: mnemonic.join(" ") }
        }
      }
    });
  };

  return (
    <SafeAreaView>
  <View className="bg-gray h-full flex flex-col justify-between">
      <View className="p-14 pb-0 px-6">
        <View className="text-3xl text-lightgray opacity-95 leading-9 font-geistsemibold font-semibold">
          <Text>{t("walletphrase")}</Text>
          </View>
        <View className="text-3xl text-lightgray opacity-95 leading-9 font-geistsemibold font-semibold">
          <Text>{t("importwallet")}</Text>
          </View>
        <View className="list-numbers grid grid-cols-2 gap-2 gap-y-0 relative z-10 mb-3">
          {mnemonic.map((word: any, index: any) => (
            <ImportSeedVW key={index} index={index} word={word} onUpdateWord={updateWord} />
          ))}
        </View>

        <TouchableOpacity className="bg-continue w-full h-12 py-2.5 rounded-lg font-[jetbrains]" onPress={handleFileUpload}>
      <Text className="font-geistregular text-end text-headingcolor text-xs max-sm:text-left">{t("importkeys")}
      </Text>
        </TouchableOpacity>
      </View>
      <View className="px-6 py-5">
      <TouchableOpacity className="bg-continue w-full h-12 py-2.5 rounded-lg font-[jetbrains]" onPress={validateMnemonic} >
       <Text className="font-geistregular text-end text-headingcolor text-xs max-sm:text-left">{t("walletlogin")}
      </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}



export default AnduroImportVC;
