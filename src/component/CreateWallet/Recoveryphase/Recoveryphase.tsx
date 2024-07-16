import React from 'react';
import { View, Text,SafeAreaView, TextInput} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../../UI/TouchableOpacity/TouchableOpacityVW';

export const Recoveryphase = (props:any) => {

  const handleNext = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Walletimported',
        options: {
          topBar: {
            visible: false,
          }
        }
      }
    })
  }

  const recoveryPhases = [
    "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12"
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#140401] h-full">
      <View className="items-center gap-8 px-4 mt-10">
        <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">
          Enter your wallet’s recovery phase
        </Text>
        <Text className="font-['Geist-Regular'] text-base text-lightgray opacity-50">
          Type the numbers in sequence, or import them
        </Text>
      </View>
      <View className="flex-row px-3 mt-5 mr-1">
        <View className="flex-1">
          {recoveryPhases.filter((_, index) => index % 2 === 0).map((index) => (
            <View key={index} className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mb-3">
              <Text className="font-['Geist-Bold'] text-importkeys text-sm">{index}</Text>
              <TextInput
                className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
                placeholderTextColor="#FAFAFA"
              />
            </View>
          ))}
        </View>
        <View className="flex-1">
          {recoveryPhases.filter((_, index) => index % 2 !== 0).map((index) => (
            <View key={index} className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mb-3">
              <Text className="font-['Geist-Bold'] text-importkeys text-sm">{index}</Text>
              <TextInput
                className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
                placeholderTextColor="#FAFAFA"
              />
            </View>
          ))}
        </View>
      </View>
      <View className='mt-8 p-5'>
      <TouchableOpacityVW
      type="Importkeys"
      text="Import keys from a file"/>
      </View>
      <TouchableOpacityVW
      type="Continue"
      onPress={handleNext}
      text="Login to Wallet"/>
    </SafeAreaView>
  );
};

export default Recoveryphase;