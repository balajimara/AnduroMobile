import React, { useState } from 'react';
import { View, Text,SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Dialog } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';
import _ from "lodash"
import { Navigation } from 'react-native-navigation';
import ConfirmSeedItemVW from '../../../Common/Views/confirmseeditem/ConfirmSeedItemVW';
import ConfirmPopupVW from '../../../Common/Views/confirmpopup/ConfirmPopupVW';


const AnduroSeedConfirmVC = (props:any) => {
    const { mnemonic } = props
    const [open, setOpen] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [mnemonicVal, setMnemonicVal] = React.useState<{
      shuffledMnemonic: string[]
      selectedMnemonic: string[]
    }>({
      shuffledMnemonic: [],
      selectedMnemonic: [],
    })
  
    React.useEffect(() => {   
      if (mnemonicVal) {
        setMnemonicVal({
          ...mnemonicVal,
          shuffledMnemonic: _.shuffle(mnemonic.split(/\s+/)),
        })
      }
    }, [])

   
    const {t} = useTranslation() 

    /**
   * This function is used to select the seed key.
   * @param index -selected index
   */
  const selectAction = (index: number) => {
    // checking if the key has already been selected or not; if the key has not been selected, add selected keys.
    if (!mnemonicVal.selectedMnemonic.includes(mnemonicVal.shuffledMnemonic[index])) {
      let selectedMnemonicNew = mnemonicVal.selectedMnemonic
      selectedMnemonicNew.push(mnemonicVal.shuffledMnemonic[index])   
      setMnemonicVal({
        ...mnemonicVal,
        selectedMnemonic: selectedMnemonicNew,
      })
      setIsDisabled(mnemonic !== selectedMnemonicNew.join(" "))
    } else {
      // Remove it from the selected keys.
      let mnemonicKeys: string[] = []
      let isFound = false
      for (let i = 0; i < mnemonicVal.selectedMnemonic.length; i++) {
        const key = mnemonicVal.selectedMnemonic[i]
        if (key !== mnemonicVal.shuffledMnemonic[index]) {
          mnemonicKeys.push(key)
        } else {
          if (key == mnemonicVal.shuffledMnemonic[index]) {
            if (isFound) {
              mnemonicKeys.push(key)
            } else {
              isFound = true
            }
          }
        }
      }
      setMnemonicVal({ ...mnemonicVal, selectedMnemonic: [...mnemonicKeys] })
      setIsDisabled(true)
    }
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  const handleNavigation = () => {
    Navigation.push(props.componentId, {
      component: {
        name: "AnduroCreatePassword",
        passProps: {
          mnemonic: mnemonic,
          type: "create"
        },
        options: {
          topBar: {
            visible: false,
          },
          bottomTabs: {
            visible: false,
          },
        },
      },
    })
  }

  const gotoNewPassword = () => {
    setOpen(false)
    Navigation.push(props.componentId!, {
      component: {
        name: "AnduroCreatePassword",
        passProps: {
          mnemonic: mnemonic,
          type: "create"
        },
        options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: false,
            },
          },
      },
    })
  }

  return (
      <SafeAreaView>
        <View className="bg-gray h-full flex flex-col justify-between">
        <View className="px-6">
          <View className="w-64 m-auto mb-4"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("confirmbackup")}</Text></View>
          <View className="mb-10">
          <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("typenumber")}</Text>
          </View>
        <View className="max-h-[66%] pb-14">
          <ScrollView>
          <View>
          {mnemonicVal.shuffledMnemonic.length > 0 &&
          mnemonicVal.shuffledMnemonic.map((val: string, i: number) => ( 
            <ConfirmSeedItemVW 
            mnemonicKey={val}
            position={mnemonicVal.selectedMnemonic.indexOf(val) + 1}
            index={i}
            selectAction={() => selectAction(i)}
            key={i}
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
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            onPress={() => { setOpen(true) }}
          />
          <Button className="w-full"
            title="Continue"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            disabled={isDisabled}
            onPress={handleNavigation}
          />
        </View>
        <ConfirmPopupVW  mnemonic={mnemonic} isopen={open} onClose={() => handleClosePopup()} onRedirectPage={() => gotoNewPassword()}/>
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