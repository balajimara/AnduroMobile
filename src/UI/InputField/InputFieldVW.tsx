import {Text, TextInput, View} from 'react-native';
import NameWalletIcon from '../Icons/NameWalletIcon';
import InfoIcon from '../Icons/InfoIcon';
import VisiblityOffIcon from '../Icons/VisiblityOffIcon';

const InputFieldVW = (props: any) => {
    const {label,imageposition,placeholder,placeholdercolor} = props;
    return (
        <View className="gap-2 px-5 mt-11">
            <View className="flex-row gap-1">
            <Text className="font-['Inter-Regular'] text-xs text-createwallet uppercase">{label}</Text>
            <InfoIcon/>
            </View>
            <View className="flex-row justify-center items-center bg-inputPlaceholder px-3 h-14 ml-6">
            {imageposition === "left" && (
                <NameWalletIcon/>
            )}
            <TextInput
                className="font-['Geist-Bold'] ml-2 opacity-60 flex-1 text-white"
                placeholder={placeholder}
                placeholderTextColor={placeholdercolor}/>
            {imageposition === "right" && (
                <VisiblityOffIcon/>
            )}
            </View>
        </View>
    );
};

export default InputFieldVW;

