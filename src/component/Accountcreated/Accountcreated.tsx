import React, { useEffect } from 'react';
import { View, Text,SafeAreaView,Image, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../UI/TouchableOpacity/TouchableOpacityVW';

export const Accountcreated = (props:any) => {

    const handleNext = () => {
        Navigation.push(props.componentId, {
          component: {
            name: 'Recoveryphase',
            options: {
              topBar: {
                visible: false,
              }
            }
          }
        })
      }
return (
  <SafeAreaView className="flex-1 bg-gray h-full justify-center items-center">
    <View className="flex-1 h-full bg-gray items-center justify-center gap-7 mt-10">
    <Image
        source={require('../../assets/images/Anduro.png')}
        className="w-72 h-72 resize-contai"
    />
    </View>
    <View className="flex-1 items-center gap-8 px-10">
    <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">Your account has been created</Text>
    <Text className="font-['Geist-Regular'] text-base text-lightgray opacity-50">Let’s write something here.</Text>
    </View>
    <TouchableOpacityVW
    onPress={handleNext}
    text="Login"
    />
  </SafeAreaView>
);
};

export default Accountcreated;
