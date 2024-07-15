import React, {useState} from 'react';
import { View, Text,SafeAreaView,Image, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';

export const NewandExisting = (props:any) => {
const [agree, setAgree] = useState(false);

const handleStartAction = () => {
  setAgree(!agree)
  if(!agree) {
    Navigation.push(props.componentId, {
      component: {
        name: 'Newaccount',
        options: {
          topBar: {
            visible: false,
          }
        }
      }
    })
  }
}
return (
  <SafeAreaView className="flex-1 bg-gray h-full justify-center items-center">
    <View className="flex-1 items-center h-full bg-gray p-10 gap-7 mt-10">
      <Image
        source={require('../../assets/images/andurologo.png')}
        className="w-80	h-10 resize-contain"
      />
      <Text className="font-['Geist-Regular'] text-lg text-lightgray opacity-60 text-center">
        The wallet designed to make your Bitcoin journey seamless.
      </Text>
    </View>
    <View className="absolute bottom-0 left-0 right-0 items-center p-5 mb-10">
      <TouchableOpacity onPress={handleStartAction} className="h-24 justify-center items-center rounded-lg mb-4 border border-currencyLine">
        <View className="flex-row justify-between items-center w-full px-4">
          <View className="flex-1">
          <Text className="h-45 font-['Geist-Medium'] text-lg text-importkeys">New account</Text>
            <Text className="font-['Geist-Regular'] text-sm text-phrasebutton mt-1">Create a New Wallet and Recovery Phrase</Text>
          </View>
          <Image
            source={require('../../assets/images/Black.png')}
            className="w-4 h-4 resize-contain "
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="h-24	justify-center items-center rounded-lg mb-4 border border-currencyLine">
        <View className="flex-row justify-between items-center w-full px-4">
          <View className="flex-1">
            <Text className="h-45 font-['Geist-Medium'] text-lg text-importkeys">Existing account</Text>
            <Text className="font-['Geist-Regular'] text-sm text-phrasebutton mt-1">Restore your Wallet using your Recovery Phrase</Text>
          </View>
          <Image
            source={require('../../assets/images/Black.png')}
            className="w-4 h-4 resize-contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};

export default NewandExisting;
