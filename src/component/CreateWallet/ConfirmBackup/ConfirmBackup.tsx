import { BlurView } from '@react-native-community/blur';
import React, {useState} from 'react';
import { View, Text,SafeAreaView,TouchableOpacity,Image, FlatList} from 'react-native';
import { Navigation } from 'react-native-navigation';
import TouchableOpacityVW from '../../../UI/TouchableOpacity/TouchableOpacityVW';
import ConfirmBackupVW from '../../../UI/ConfirmBackup/ConfirmBackupVW';
import Popup from '../../../UI/Popup/PopupVW';
import PopupVW from '../../../UI/Popup/PopupVW';

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
    word_subtitle:string;
  }

  const data: DataItem[] = [
    { id: '1', word: 'power',word_subtitle:'2'},
    { id: '2', word: 'vivid',word_subtitle:'X' },
    { id: '3', word: 'negative' ,word_subtitle:'X'},
    { id: '4', word: 'mountain' ,word_subtitle:'X'},
    { id: '5', word: 'solve' ,word_subtitle:'X'},
    { id: '6', word: 'power',word_subtitle:'X'},
    { id: '7', word: 'vivid',word_subtitle:'X' },
    { id: '8', word: 'negative' ,word_subtitle:'X'},
    { id: '9', word: 'mountain' ,word_subtitle:'X'},
    { id: '10', word: 'solve' ,word_subtitle:'X'},
    { id: '11', word: 'mountain' ,word_subtitle:'X'},
    { id: '12', word: 'solve' ,word_subtitle:'X'},
  ];

  const renderItem = ({ item }: { item: DataItem }) => {
    const isSelected = selectedId === item.id;
    const borderColorClass = isSelected ? 'border-confirmbackup' : 'bg-clipboard ';
    const textinputcolor = isSelected ? 'border border-backupvaluecolor' : '' ;

    return (
      <ConfirmBackupVW
      onPress={() => setSelectedId(item.id)}
      borderColorClass={borderColorClass}
      textinputcolor={textinputcolor}
      item={item}
      id={item.word_subtitle}/>
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

      <TouchableOpacityVW type="Continue" onPress={togglePopup} text="Continue" />
      {showPopup && (
        <>
          <BlurView
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
          <PopupVW
          type="Confirmbackup"
          image={require('../../../assets/images/Recoverykeys.png')}
          label="Do you want to review the recovery keys?"
          text="A secret recovery phrase is a set of words that correspond to numbers. These numbers make up a seed integer that generates all of the private keys in your wallet."
          subtext="Each address for every crypto has its own private key. Private keys are used to authorize transactions and prove ownership of your funds."
          Onpressno={closePopup}
          Onpressyes={handleNext}/>
        </>
      )}
    </SafeAreaView>
  );
};

export default ConfirmBackup;