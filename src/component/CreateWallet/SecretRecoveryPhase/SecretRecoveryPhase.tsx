import React from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../../UI/TouchableOpacity/TouchableOpacityVW';

export const SecretRecoveryPhase = (props: any) => {

  const handleNext = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'ConfirmBackup',
        options: {
          topBar: {
            visible: false,
          }
        }
      }
    })
  }

  const recoveryPhrases = [
    "vivid", "power", "gesture", "badge", "shoulder", "gap",
    "image", "negative", "mountain", "vital", "solve", "mandate"
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray h-full">
      <View className="items-center gap-5 mt-14">
        <Text className="font-['Geist-Medium'] text-4xl text-importkeys text-center">
          Your secret recovery phase
        </Text>
        <Text className="font-['Geist-Regular'] text-base text-phrasebutton">
          Back it up, and do not share this with anyone.
        </Text>
      </View>
      <View className="box-content h-80 w-11/12 mt-5 ml-5 border-4 border-recoverykeysborder bg-recoverykeysbg rounded-3xl flex-row">
        <View className="flex-1 justify-center items-center">
          {recoveryPhrases.slice(0, 6).map((phrase, index) => (
            <View key={index} className='mr-10'>
              <View className="flex-row gap-2 mb-2 mt-1 ml-5">
                <Text className="font-['Geist-Medium'] text-recoveryphase text-base mr-3">{index + 1}</Text>
                <Text className="font-['Geist-Medium'] text-phrase text-base">{phrase}</Text>
              </View>
              <View className="border-b border-recoveryphase w-32 ml-8"/>
            </View>
          ))}
        </View>
        <View className="flex-1 justify-center items-center">
          {recoveryPhrases.slice(6, 12).map((phrase, index) => (
            <View key={index + 6} className='mr-10'>
              <View className="flex-row gap-2 mb-2 mt-1 ml-5">
                <Text className="font-['Geist-Medium'] text-recoveryphase text-base mr-3">{index + 7}</Text>
                <Text className="font-['Geist-Medium'] text-phrase text-base">{phrase}</Text>
              </View>
              <View className="border-b border-recoveryphase w-32 ml-8"/>
            </View>
          ))}
        </View>
      </View>
      <View className="flex-row mt-6 px-7">
      <View className='flex-1 flex-row justify-between'>
        <TouchableOpacityVW
        type="SecretRecoveryPhase"
        text="Copy to Clipboard"
        icon="Copy"/>
        <TouchableOpacityVW
        type="SecretRecoveryPhase"
        icon="Downloadkeys"
        text="Download keys"/>
      </View>
      </View>
      <TouchableOpacityVW
      type="Continue"
      textinfo = "You’ll be asked to confirm the positions in the next step. Make sure you’ve backed these up somewhere"
      onPress={handleNext}
      text="Continue"/>
    </SafeAreaView>
  );
};
export default SecretRecoveryPhase;