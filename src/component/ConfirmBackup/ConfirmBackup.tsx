import { BlurView } from '@react-native-community/blur';
import React, {useState} from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,TextInput, Image, FlatList} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../UI/TouchableOpacity/TouchableOpacityVW';

export const ConfirmBackup = (props: any) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  interface DataItem {
    id: string;
    word: string;
  }

  const data: DataItem[] = [
    { id: '1', word: 'power' },
    { id: '2', word: 'vivid' },
    { id: '3', word: 'negative' },
    { id: '4', word: 'mountain' },
    { id: '5', word: 'solve' },
  ];

  const renderItem = ({ item }: { item: DataItem }) => {
    const isSelected = selectedId === item.id;
    const borderColorClass = isSelected ? 'border-confirmbackup' : 'bg-clipboard ';
    const textinputcolor = isSelected ? 'border border-backupvaluecolor' : '' ;

    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <View className={`box-content h-28 w-11/12 mt-5 ml-5 bg-clipboard rounded-2xl flex-row border ${borderColorClass}`}>
          <View className="box-content h-20 mt-4 w-11/12 ml-4 bg-clipboard rounded-2xl flex-row justify-between items-center p-3">
            <Text className="font-['Geist-Medium'] text-phrase text-xl">{item.word}</Text>
            <TextInput
              className={`font-['Geist-Regular'] bg-inputPlaceholder h-14 w-24 rounded-full text-lightgray text-center ${textinputcolor}`}
              placeholderTextColor="#FAFAFA"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Authorizedscreen',
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray h-full relative px-2">
      <View className="items-center gap-8 px-4 mt-10">
        <Text className="font-['Geist-Medium'] text-4xl text-lightgray text-center">
          Confirm your backup
        </Text>
        <Text className="font-['Geist-Regular'] text-base text-phrasebutton">
          Type the numbers of the words in the field
        </Text>
      </View>
      <FlatList
        data={data}
        style={{ flexGrow: 0 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacityVW onPress={togglePopup} text="Continue" />
      {showPopup && (
        <>
          <BlurView
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
          <View className="absolute bottom-8 left-0 right-0 w-11/12 bg-popupclr rounded-lg p-8 ml-5">
            <View className="mb-2.5 bg-clipboard h-16 w-1/4 justify-center items-center mr-52 rounded-lg">
              <Image
                  source={require('../../assets/images/Recoverykeys.png')}
                  className="w-10 h-10 resize-contain mr-1"
                />
            </View>
            <Text className="font-['Geist-SemiBold'] text-2xl text-importkeys mb-2 opacity-94">
              Do you want to review the recovery keys?
            </Text>
            <Text className="font-['Geist-Regular'] text-sm text-createwallet opacity-70 font-normal mt-2">
              A secret recovery phrase is a set of words that correspond to numbers. These numbers make up a seed integer that generates all of the private keys in your wallet.
            </Text>
            <Text className="font-['Geist-Regular'] text-sm text-createwallet opacity-70 font-normal mt-4">
              Each address for every crypto has its own private key. Private keys are used to authorize transactions and prove ownership of your funds.
            </Text>
            <View className="flex pt-5 flex-row">
              <TouchableOpacity onPress={closePopup} className="w-1/2 py-3 px-4 mr-4 border border-existaccount">
                <Text className="text-lightgray font-['Sora-SemiBold'] text-center">No thanks</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} className="bg-continue w-1/2 text-text15 text-white py-3 px-2">
                <Text className="text-lightgray font-['Sora-SemiBold'] text-center">Yes, let's review</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ConfirmBackup;