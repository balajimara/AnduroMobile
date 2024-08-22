import React, {useState} from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { CheckBox } from '@rneui/themed';
import { LinearProgress } from 'react-native-elements';
import Logo from '../../Common/Icons/Logo';

export const AnduroLandingVC = (props:any) => {
const [agree, setAgree] = useState(false);


return (
  <SafeAreaView>
   <View className='bg-gray h-full flex flex-col justify-between'>
   <View className="p-8">
    <View className="m-auto my-4 mb-3"><Logo/ ></View>
    <View className="w-64 m-auto">
      <Text className="font-geistmedium text-headingcolor text-sm text-center leading-5">
        The wallet designed to make your Bitcoin journey seamless.
      </Text>
    </View>
    </View>
    <View className="items-center p-8 px-0">
    <View className="flex-row items-center px-8 pb-3">
    <CheckBox
              checked={agree}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="#FFF2F0"
              uncheckedColor="#FFF2F0"
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
              }}
            />
            <Text className="font-geistregular text-white text-xs">
            I agree with Privacy Notice and acknowledge that the Anduro wallet and network are in beta. I will only put in funds that I am comfortable losing.
            </Text>
            </View> 
            <LinearProgress variant="determinate" />
            </View> 
   </View> 
  </SafeAreaView>
);
};

export default AnduroLandingVC;
