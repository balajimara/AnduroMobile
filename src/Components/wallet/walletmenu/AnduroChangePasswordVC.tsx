import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { useTranslation } from 'react-i18next';
import { Button, Input } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';

const AnduroChangePasswordVC = () => {
  const { t } = useTranslation()
  return (
    <SafeAreaView>
     <View className="bg-gray h-full flex flex-col justify-between">
      <View>
       <View className="p-12 px-6 pb-0">
        <View className="mb-10"><Text className="text-center text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold">Set Password</Text></View>
        <View className="mb-5">
        <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">New Password</Text>
        <View className="relative">
        <View className="absolute top-3 right-4 z-10 opacity-60"><Icon name={'eye-slash'} size={18} color="#FAFAFA" />
        </View>
        <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder='Enter New Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} />
        </View>
        </View>
       </View>
       <View>
        <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">Confirm New Password</Text>
        <View className="relative">
        <View className="absolute top-3 right-4 z-10 opacity-60">
          <Icon name={'eye-slash'} size={18} color="#FAFAFA" />
        </View>
        <View className="bg-popupclr h-11 pr-8 rounded-lg">
         <Input placeholder='Enter Confirm Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} />
        </View>
        </View>
       </View>
       </View>
      </View>
      <View className="w-full p-5 px-6">
        <Button className="w-full"
            title="Confirm"
            buttonStyle={{
              backgroundColor: '#E8705C',
              borderRadius: 8,
              height: 48,
            }}
            containerStyle={{ borderRadius: 8 }}
            titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
          />
        </View>
     </View>
    </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    input: {
      height: 40,
      fontFamily:'Geist-SemiBold',
      fontSize: 14,
      padding:0,
      color: '#fff',
    },
    inputOne: {
      borderBottomWidth:0,
      borderRadius:8,
      paddingLeft:10
    },
    icon: {
      color: '#fff',
      fontSize: 14,
    }
  });

  export default AnduroChangePasswordVC