import { SafeAreaView, View, Text } from 'react-native';
import { Button, Dialog } from '@rneui/themed';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

interface backpopupProps {
  nocallback: () => void,
  yescallback: () => void,
  isVisible: boolean
}

const BackPopupVW = (props: backpopupProps) => {
  const { nocallback, yescallback, isVisible} = props
  const { t } = useTranslation()
  
    return (
    <SafeAreaView>
    <Dialog overlayStyle={{ borderRadius: 8, borderWidth: 1, backgroundColor: '#231B19', borderColor: '#342d2b', width: "90%", position: 'absolute' }} isVisible={isVisible} >
     <View>
      <View className="mb-2.5 w-14 h-14 w-full-in h-auto-in opacity-70"><Icon name='crosshairs' size={50} color="#FAFAFA" /></View>
      <View className="mb-0.5"><Text className="text-base text-lightgray opacity-95 leading-5 font-geistsemibold font-semibold">{t("backpopuptext")}</Text></View>
      <View className="flex-row flex-wrap pt-4">
       <View className="w-1/2 pr-1">
        <Button className="w-full"
        title={t("no")}
        buttonStyle={{
          backgroundColor: 'transparent',
          borderWidth:1,
          borderColor:'#514e4e',
          borderRadius: 8,
          height: 40,
          padding:0
        }}
        containerStyle={{ borderRadius: 8 }}
        titleStyle={{ fontFamily: 'Geist-SemiBold', fontSize: 12 }}
        onPress={nocallback}
        />
       </View> 
       <View className="w-1/2 pl-1">
        <Button className="w-full"
        title={t("yes")}
        buttonStyle={{
          backgroundColor: '#E8705C',
          borderWidth:1,
          borderColor: '#E8705C',
          borderRadius: 8,
          height: 40,
          padding:0
        }}
        containerStyle={{ borderRadius: 8 }}
        titleStyle={{ fontFamily: 'Geist-SemiBold', fontSize: 12 }}
        onPress={() => yescallback()}
        />
       </View>
      </View> 
     </View>
    </Dialog> 
    </SafeAreaView>
    )
 
}

export default BackPopupVW