import {Image, Text,View} from 'react-native';
import TouchableOpacityVW from '../TouchableOpacity/TouchableOpacityVW';
import PopupIcon from '../Icons/PopIcon';

const Popup = (props: any) => {
    const {type,label,text,subtext,Onpressno,Onpressyes} = props;
    return (
        <>
        {type === "Confirmbackup" ? (
        <View className="absolute bottom-8 left-0 right-0 w-11/12 bg-popupclr rounded-lg p-8 ml-5">
            <View className="mb-2.5 bg-clipboard h-16 w-1/4 justify-center items-center mr-52 rounded-lg">
            <PopupIcon/>
            </View>
            <Text className="font-['Geist-SemiBold'] text-2xl text-importkeys mb-2 opacity-94">
              {label}
            </Text>
            <Text className="font-['Geist-Regular'] text-sm text-createwallet opacity-70 font-normal mt-2">
              {text}
            </Text>
            <Text className="font-['Geist-Regular'] text-sm text-createwallet opacity-70 font-normal mt-4">
              {subtext}
            </Text>
            <View className="flex pt-5 flex-row">
              <TouchableOpacityVW type="Confirmbackup" onPress={Onpressno} text="No thanks"/>
              <TouchableOpacityVW type="Confirmbackuptwo" onPress={Onpressyes} text="Yes, let's review"/>
            </View>
          </View>

        ) : null}
        </>
        );
};

export default Popup;

