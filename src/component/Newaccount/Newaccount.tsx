import React, { useEffect } from 'react';
import { View, Text,SafeAreaView,Image, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Svg, { Path } from 'react-native-svg';

export const Newaccount = (props:any) => {
    setTimeout(() => {
        Navigation.push(props.componentId, {
            component: {
              name: 'CreateWallet',
              options: {
                topBar: {
                  visible: false,
                }
              }
            }
          })
        }, 4000);

return (
  <SafeAreaView className="flex-1 bg-gray h-full justify-center items-center">
    <View className="flex-1 h-full bg-gray items-center justify-center gap-7 mt-10">
    <Image
        source={require('../../assets/images/Ref.png')}
        className="w-72 h-72 resize-contain"
    />
    </View>
    <View className="flex-1 items-center gap-8 px-10">
    <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">We’re creating your wallet</Text>
    <Text className="font-['Geist-Regular'] text-base text-lightgray opacity-50">This should only take a few seconds....</Text>
    </View>
  </SafeAreaView>
);
};

export default Newaccount;
