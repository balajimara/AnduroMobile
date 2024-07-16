import React from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../../UI/TouchableOpacity/TouchableOpacityVW';
import InputFieldVW from '../../../UI/InputField/InputFieldVW';

export const Securepassword = (props:any) => {

    const handleNext = () => {
        Navigation.push(props.componentId, {
          component: {
            name: 'Accountcreated',
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
    <View className="items-center gap-8 px-4 mt-8">
    <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">Let’s create a secure password</Text>
    <Text className="font-['Geist-Regular'] text-base text-lightgray opacity-50">Type the numbers of the words in the field</Text>
    </View>

    <InputFieldVW
    label="password"
    placeholder="••••••••••"
    placeholdercolor="#FAFAFA"
    imageposition="right"/>

    <InputFieldVW
    label="Confirm Password"
    placeholder="••••••••••"
    placeholdercolor="#FAFAFA"
    imageposition="right"/>

    <View className="p-4">
      <View className="flex-row items-center mt-4">
        <Image source={require('../../../assets/images/tick.png')} className="mr-2 opacity-50"/>
        <Text className="font-['Geist-Regular'] text-sm opacity-50 text-list">At least 8 characters</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Image source={require('../../../assets/images/tick.png')} className="mr-2 opacity-50"/>
        <Text className="font-['Geist-Regular'] text-sm opacity-50 text-list">At least 1 upper case letter (A-Z)</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Image source={require('../../../assets/images/tick.png')} className="mr-2 opacity-50"/>
        <Text className="font-['Geist-Regular'] text-sm opacity-50 text-list">At least 1 lower case letter (a-z)</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Image source={require('../../../assets/images/tick.png')} className="mr-2 opacity-50"/>
        <Text className="font-['Geist-Regular'] text-sm opacity-50 text-list">At least 1 number (0-9)</Text>
      </View>
      <View className="flex-row items-center mt-4">
        <Image source={require('../../../assets/images/tick.png')} className="mr-2 opacity-50"/>
        <Text className="font-['Geist-Regular'] text-sm opacity-50 text-list">Make sure the passwords match</Text>
      </View>
    </View>
    <TouchableOpacityVW
    type="Continue"
    onPress={handleNext}
    text="Continue"
    />
  </SafeAreaView>
);
};

export default Securepassword;