import React from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../../UI/TouchableOpacity/TouchableOpacityVW';
import InputFieldVW from '../../../UI/InputField/InputFieldVW';

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
    <InputFieldVW
      label="wallet name"
      imageposition ="left"
      placeholder="Ex: Aaron's Wallet"
      placeholdercolor="#FAFAFA"/>
    <TouchableOpacityVW
    type="Continue"
    onPress={handleNext}
    text="Continue"
    />
  </SafeAreaView>
);
};

export default CreateWalletName;