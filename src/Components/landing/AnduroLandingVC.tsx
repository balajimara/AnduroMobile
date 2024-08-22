import React, {useState} from 'react';
import { View, Text,SafeAreaView,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';

export const AnduroLandingVC = (props:any) => {
const [agree, setAgree] = useState(false);

return (
  <SafeAreaView className="flex-1 bg-gray h-full justify-center items-center">
    <View className="flex-1 items-center h-full bg-gray p-10 gap-7 mt-10">
      <Text className="font-['Geist-Regular'] text-lg text-lightgray opacity-60 text-center">
        The wallet designed to make your Bitcoin journey seamless.
      </Text>
    </View>
  </SafeAreaView>
);
};

export default AnduroLandingVC;
