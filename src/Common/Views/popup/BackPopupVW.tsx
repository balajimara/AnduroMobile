import { SafeAreaView, View, Text } from 'react-native';
import { Button, Dialog } from '@rneui/themed';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const BackPopupVW = (props:any) => {
    return (
    <SafeAreaView>
    <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute' }}>
     <View>
      <View className="mb-2.5 w-14 h-14 w-full-in h-auto-in opacity-70"><Icon name='crosshairs' size={50} color="#FAFAFA" /></View>
      <View className="mb-0.5"><Text className="text-base text-lightgray opacity-95 leading-5 font-geistsemibold font-semibold">Are you sure want to close?</Text></View>
      <View className="flex-row flex-wrap pt-4">
       <View className="w-1/2 pr-1">
        <Button className="w-full"
        title="Yes"
        buttonStyle={{
          backgroundColor: '#E8705C',
          borderWidth:1,
          borderColor: '#E8705C',
          borderRadius: 8,
          height: 40,
        }}
        containerStyle={{ borderRadius: 8 }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
        />
       </View> 
       <View className="w-1/2 pl-1">
        <Button className="w-full"
        title="No"
        buttonStyle={{
          backgroundColor: 'transparent',
          borderWidth:1,
          borderColor:'#514e4e',
          borderRadius: 8,
          height: 40,
        }}
        containerStyle={{ borderRadius: 8 }}
        titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 14 }}
        />
       </View>
      </View> 
     </View>
    </Dialog> 
    </SafeAreaView>
    )
 
}

export default BackPopupVW