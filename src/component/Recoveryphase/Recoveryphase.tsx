import React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,TextInput, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../UI/TouchableOpacity/TouchableOpacityVW';

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
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">1</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">3</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />

          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">5</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">7</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">9</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">11</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
        </View>
        <View className="flex-1">
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">2</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">4</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">6</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">8</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">10</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
          <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-12 ml-3 mt-2">
          <Text className="font-['Geist-Bold'] text-importkeys text-sm">12</Text>
            <TextInput
              className="font-['Geist-Bold'] ml-5 opacity-60 flex-1 text-white"
              placeholderTextColor="#FAFAFA"
            />
          </View>
        </View>
      </View>
      <View className='mt-8 p-5'>
        <TouchableOpacity className="h-12 flex-row justify-center items-center rounded-lg border-2 border-recoveryphase">
        <Image source={require('../../assets/images/FileArrowUp.png')} className="mr-2"/>
          <Text className="font-['JetBrainsMono-Regular'] text-lightgray text-base">Import keys from a file</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacityVW
      onPress={handleNext}
      text="Login to Wallet"
      />
    </SafeAreaView>
  );
};

export default Recoveryphase;