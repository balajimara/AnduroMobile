import React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,TextInput, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../UI/TouchableOpacity/TouchableOpacityVW';


export const CreateWalletName = (props:any) => {

    const handleNext = () => {
          Navigation.push(props.componentId, {
            component: {
              name: 'SecretRecoveryPhase',
              options: {
                topBar: {
                  visible: false,
                }
              }
            }
          })
        }

  return (
    <SafeAreaView className="flex-1 bg-gray h-full">
    <View className="items-center gap-8 px-4 mt-14">
    <Text className="font-['Geist-Medium'] text-4xl text-importkeys text-center">Let’s name your wallet</Text>
    <Text className="font-['Geist-Regular'] text-base text-phrasebutton">Back it up, and do not share this with anyone.</Text>
    </View>
    <View className="gap-2 px-5 mt-11">
    <View className="flex-row gap-1">
        <Text className ="font-['Inter-Regular'] text-xs text-createwallet uppercase">
        wallet name
        </Text>
        <Image
            source={require('../../assets/images/info.png')}
            className="w-4 h-4 resize-contain"
          />

    </View>
    <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-14 ml-6">
        <Image
            source={require('../../assets/images/Wallet.png')}
        />
        <TextInput className="font-['Geist-Bold'] ml-2 opacity-60 flex-1 text-white"
        placeholder="Ex: Aaron's Wallet"
        placeholderTextColor='#FAFAFA'
        />
    </View>
    </View>
    <TouchableOpacityVW
    onPress={handleNext}
    text="Continue"
    />
  </SafeAreaView>
);
};

export default CreateWalletName;