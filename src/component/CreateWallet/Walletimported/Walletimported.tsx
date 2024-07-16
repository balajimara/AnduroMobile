import React, { useEffect } from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import CreatedWalletIcon from '../../../UI/Icons/CreatedWalletIcon';

export const Walletimported = () => {
return (
  <SafeAreaView className="flex-1 bg-gray h-full justify-center items-center">
    <View className="flex-1 h-full bg-gray items-center justify-center gap-7 mt-10">
    <CreatedWalletIcon/>
    </View>
    <View className="flex-1 items-center gap-8 px-5">
    <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">Wallet successfully imported</Text>
    <Text className="font-['Geist-Regular'] text-base text-lightgray opacity-50">Let’s write something here.</Text>
    </View>
  </SafeAreaView>
);
};

export default Walletimported;
