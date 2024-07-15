import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const TouchableOpacityVW = (props: any) => {
    const {onPress,text,textinfo} = props;
    return (
        <View className="absolute bottom-0 left-0 right-0 justify-center items-center p-8 gap-5">
            {text && <Text className="font-['Geist-Regular'] text-sm text-phrasebutton">{textinfo}</Text>}
            <TouchableOpacity onPress={onPress}
            className="bg-[#E8705C] h-12 w-full justify-center items-center rounded-lg">
            <Text className="font-['JetBrainsMono-Regular'] text-[#FAFAFA] text-lg">{text}</Text>
          </TouchableOpacity>
        </View>
    );
};

export default TouchableOpacityVW;