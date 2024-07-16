import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import RightArrowIcon from '../Icons/RightArrowIcon';
import ClipboardIcon from '../Icons/ClipboardIcon';
import DownloadKeysIcon from '../Icons/DownloadkeysIcon';
import ImportIcon from '../Icons/ImportIcon';

const TouchableOpacityVW = (props: any) => {
    const {onPress,icon,text,textinfo,type,image,subtext} = props;
    return (
        <>
        {type === "Continue" ? (
        <View className="absolute bottom-0 left-0 right-0 justify-center items-center p-8 gap-5">
            {text && <Text className="font-['Geist-Regular'] text-sm text-phrasebutton">{textinfo}</Text>}
            <TouchableOpacity onPress={onPress}
            className="bg-[#E8705C] h-12 w-full justify-center items-center rounded-lg">
            <Text className="font-['JetBrainsMono-Regular'] text-[#FAFAFA] text-lg">{text}</Text>
          </TouchableOpacity>
        </View>

        ) : type === "SecretRecoveryPhase" ? (
            <TouchableOpacity className="bg-clipboard rounded-3xl flex-row justify-center items-center h-12 px-2">
            {icon === "Copy" && (
              <ClipboardIcon/>
            )}
            {icon === "Downloadkeys" && (
              <DownloadKeysIcon/>
            )}
            <Text className="font-['Geist-Regular'] text-sm text-phrasebutton">{text}</Text>
          </TouchableOpacity>

        ) : type === "Confirmbackup" ? (
            <TouchableOpacity onPress={onPress} className="w-1/2 py-3 px-4 mr-4 border border-existaccount">
            <Text className="text-lightgray font-['Sora-SemiBold'] text-center">{text}</Text>
            </TouchableOpacity>

        ) : type === "Confirmbackuptwo" ? (
            <TouchableOpacity onPress={onPress} className="bg-continue w-1/2 text-text15 text-white py-3 px-2">
            <Text className="text-lightgray font-['Sora-SemiBold'] text-center">{text}</Text>
            </TouchableOpacity>

        ) : type === "Importkeys" ? (
        <TouchableOpacity className="h-12 flex-row justify-center items-center rounded-lg border-2 border-recoveryphase">
        <ImportIcon/>
          <Text className="font-['JetBrainsMono-Regular'] text-lightgray text-base">{text}</Text>
        </TouchableOpacity>

        ) : type === "Createaccount" ? (
        <TouchableOpacity onPress={onPress} className="h-24 justify-center items-center rounded-lg mb-4 border border-currencyLine">
        <View className="flex-row justify-between items-center w-full px-4">
          <View className="flex-1">
          <Text className="h-45 font-['Geist-Medium'] text-lg text-importkeys">{text}</Text>
            <Text className="font-['Geist-Regular'] text-sm text-phrasebutton mt-1">{subtext}</Text>
          </View>
          <RightArrowIcon/>
        </View>
        </TouchableOpacity>
        ) : null}
        </>
    );
};

export default TouchableOpacityVW;