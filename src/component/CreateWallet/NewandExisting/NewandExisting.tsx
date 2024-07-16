import React, {useState} from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../../UI/TouchableOpacity/TouchableOpacityVW';
import Logo from '../../../UI/Icons/Logo';

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
      <Logo/>
      <Text className="font-['Geist-Regular'] text-lg text-lightgray opacity-60 text-center">
        The wallet designed to make your Bitcoin journey seamless.
      </Text>
    </View>
    <View className="absolute bottom-0 left-0 right-0 items-center p-5 mb-10">
      <TouchableOpacityVW
      type="Createaccount"
      onPress={handleStartAction}
      text="New account"
      subtext="Create a New Wallet and Recovery Phrase"
      />
      <TouchableOpacityVW
      type="Createaccount"
      onPress={handleStartAction}
      text="Existing account"
      subtext="Restore your Wallet using your Recovery Phrase"
      />
    </View>
  </SafeAreaView>
);
};

export default NewandExisting;
