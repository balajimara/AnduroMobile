import React, { useState } from 'react';
import { View, Text,SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, ListItem, Dialog } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import ConfirmSeedItemVW from '../../../Common/Views/confirmseeditem/ConfirmSeedItemVW';
import _ from "lodash"


const AnduroSeedConfirmVC = (props:any) => {
    const { mnemonic } = props
    const [visible1, setVisible1] = useState(false);
    const [mnemonicKey, setMnemoniKey] = useState(mnemonic.split(" "))
    const [shufflemnemonicKey, setShuffleMnemoniKey] = useState<string[]>(_.shuffle(mnemonic.split(" ")))
    const [selectedmnemonicKey, setSelectedMnemoniKey] = useState<string[]>([])
    const [isDisabled, setIsDisabled] = useState(true)
    React.useEffect(() => {   
      console.log('inside selected')
    }, [selectedmnemonicKey])

    const toggleDialog1 = () => {
      setVisible1(!visible1);
    };
    const {t} = useTranslation()
    const changeBgColor = () => {
        styles.wrapper.backgroundColor = "#2E2825";
      };

    /**
   * This function is used to select the seed key.
   * @param index -selected index
   */
  const selectAction = (index: number) => {
    console.log('inside selectAction', index)
    // checking if the key has already been selected or not; if the key has not been selected, add selected keys.
    if (!selectedmnemonicKey.includes(shufflemnemonicKey[index])) {
      let selectedMnemonicNew = selectedmnemonicKey
      selectedMnemonicNew.push(shufflemnemonicKey[index])   
      setSelectedMnemoniKey(selectedMnemonicNew)
      setIsDisabled(mnemonic !== selectedMnemonicNew.join(" "))
    } else {
      // Remove it from the selected keys.
      let mnemonicKeys: string[] = []
      let isFound = false
      for (let i = 0; i < selectedmnemonicKey.length; i++) {
        const key = selectedmnemonicKey[i]
        if (key !== shufflemnemonicKey[index]) {
          mnemonicKeys.push(key)
        } else {
          if (key == shufflemnemonicKey[index]) {
            if (isFound) {
              mnemonicKeys.push(key)
            } else {
              isFound = true
            }
          }
        }
      }
      setSelectedMnemoniKey(mnemonicKeys)
      setIsDisabled(true)
    }
  }

    return (
        <SafeAreaView>
         <View className="bg-gray h-full flex flex-col justify-between">
          <View className="px-6">
           <View className="w-64 m-auto mb-4"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("confirmbackup")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("typenumber")}</Text>
           </View>
          <View className="max-h-[65%] pb-14">
           <ScrollView>
           <View>
           {shufflemnemonicKey.length > 0 &&
            shufflemnemonicKey.map((val: string, i: number) => (    
              <ConfirmSeedItemVW 
              mnemonicKey={val} 
              position={selectedmnemonicKey.indexOf(val) + 1}
              selectAction={() => selectAction(i)}
              index={i}
              />
            ))}   
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
              disabled={isDisabled}
            />
          </View>
          <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute', bottom:20, }} isVisible={visible1} onBackdropPress={toggleDialog1} animation={"slideInUp"}>
           <View className="mb-2.5 w-14 h-14 w-full-in h-auto-in opacity-70"><Icon name='crosshairs' size={50} color="#FAFAFA" /></View>
           <View className="mb-1"> 
            <Text className="text-base text-lightgray opacity-95 leading-5 font-geistsemibold font-semibold w-44">Do you want to review the recovery keys?</Text>
           </View>
           <View className="opacity-70 pt-2 pb-4">
            <Text className="font-geistregular text-headingcolor text-xs mb-4">A secret recovery phrase is a set of words that correspond to numbers. These numbers make up a seed integer that generates all of the private keys in your wallet.</Text>
            <Text className="font-geistregular text-headingcolor text-xs">Each address for every crypto has its own private key. Private keys are used to authorize transactions and prove ownership of your funds.</Text>
           </View>
           <View className="flex-row flex-wrap pt-4">
            <View className="w-1/2 pr-1">
                <Button className="w-full"
                  title="No thanks"
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    borderWidth:1,
                    borderColor:'#514e4e',
                    borderRadius: 0,
                    height: 40,
                  }}
                  titleStyle={{ fontFamily: 'Geist-SemiBold', fontSize: 14 }} 
                />
            </View>
            <View className="w-1/2 pl-1">
            <Button className="w-full"
              title="Yes, let's review"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderWidth:1,
                borderColor: '#E8705C',
                borderRadius: 0,
                height: 40,
              }}
              titleStyle={{ fontFamily: 'Geist-SemiBold', fontSize: 14 }}
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