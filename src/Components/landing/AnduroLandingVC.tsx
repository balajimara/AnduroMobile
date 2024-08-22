import React, {useState} from "react";
import { View, Text,SafeAreaView,Image} from "react-native";
import { Navigation } from "react-native-navigation";
import Logo from "../../Common/Icons/Logo";
import { CheckBox } from '@rneui/themed';

export const AnduroLandingVC = (props:any) => {
const [agree, setAgree] = useState(false);

return (
  <SafeAreaView className="flex-1 bg-gray h-full justify-center items-center">
    <View className="flex-1 items-center h-full bg-gray p-10 gap-7 mt-10">
      <Text className="font-['Geist-Regular'] text-lg text-lightgray opacity-60 text-center">
        The wallet designed to make your Bitcoin journey seamless.
        <Logo/>
        <CheckBox
        checked={true}
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

      </Text>
    </View>
  </SafeAreaView>
);
};

export default AnduroLandingVC;
