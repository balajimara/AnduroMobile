import React, { useState } from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { CheckBox } from '@rneui/themed';
import Logo from '../../../UI/Icons/Logo';

// import CheckBox from '@react-native-community/checkbox';
// import Custom from '../../styles/Custom';

export const FirstScreen = (props:any) => {
  const [agree, setAgree] = React.useState(false);

  const handleStartAction = () => {
      setAgree(!agree)
      if(!agree) {
        Navigation.push(props.componentId, {
          component: {
            name: 'NewandExisting',
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
    <SafeAreaView>
      <View className='bg-gray h-full'>
        <View className="flex-1 items-center h-full bg-gray p-10 gap-7 mt-10">
          <Logo/>
          <Text className="font-['Geist-Regular'] text-lg text-lightgray opacity-60 text-center">
            The wallet designed to make your Bitcoin journey seamless.
          </Text>
        </View>
        <View className="items-center p-5 mb-9">
          <View className="flex-row items-center">
          <CheckBox
              checked={agree}
              onPress={handleStartAction}
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
          {!agree && (
            <Text className="font-['Geist-Regular'] text-xs p-2 text-lightgray flex-1">
            I agree with Privacy Notice and acknowledge that the Anduro wallet and network are in beta. I will only put in funds that I am comfortable losing.
            </Text>
          )}

          {agree && (
            <Text className="font-['Geist-Regular'] text-xs p-2 text-lightgray flex-1 opacity-30">
            I agree with Privacy Notice and acknowledge that the Anduro wallet and network are in beta. I will only put in funds that I am comfortable losing.
            </Text>
          )}

        </View>
        </View>
        <View className="w-full h-0.5 bg-lodercolor absolute bottom-6 left-0 right-0">
           <View className="w-1/4 h-0.5 bg-loginloader">
            </View>
          </View>
      </View>
    </SafeAreaView>
  );
};
export default FirstScreen;