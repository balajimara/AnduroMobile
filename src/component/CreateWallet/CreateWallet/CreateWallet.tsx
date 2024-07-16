import React from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import CreatedWalletIcon from '../../../UI/Icons/CreatedWalletIcon';

export const CreateWallet = (props:any) => {
    setTimeout(() => {
        Navigation.push(props.componentId, {
            component: {
              name: 'CreateWalletName',
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
    <View className="flex-1 h-full bg-gray items-center justify-center mt-32">
    <CreatedWalletIcon/>
    </View>
    <View className="flex-1 items-center px-5 gap-8">
    <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">Your wallet has been created</Text>
    </View>
  </SafeAreaView>
);
};

export default CreateWallet;
