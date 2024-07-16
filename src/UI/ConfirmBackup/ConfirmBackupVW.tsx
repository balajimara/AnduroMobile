import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const ConfirmBackupVW = (props: any) => {
    const {onPress,borderColorClass,textinputcolor,item,id} = props;
    return (
    <TouchableOpacity onPress={onPress}>
    <View className={`box-content h-28 w-11/12 mt-5 ml-5 bg-clipboard rounded-2xl flex-row border ${borderColorClass}`}>
      <View className="box-content h-20 mt-4 w-11/12 ml-4 bg-clipboard rounded-2xl flex-row justify-between items-center p-3">
        <Text className="font-['Geist-Medium'] text-phrase text-xl">{item.word}</Text>
        <TextInput
          className={`font-['Geist-Regular'] bg-inputPlaceholder h-14 w-24 rounded-full text-lightgray text-center ${textinputcolor}`}
          placeholder={id}
          placeholderTextColor="#FAFAFA"
        />
      </View>
    </View>
    </TouchableOpacity>
    );
};

export default ConfirmBackupVW;



