import { View, Text,SafeAreaView,StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, ListItem } from "@rneui/themed"
import  Icon  from 'react-native-vector-icons/FontAwesome';

const AnduroCreatePasswordVC = () => {
    const {t} = useTranslation() 
    const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]
   
    return (
        <SafeAreaView>
         <View className="bg-gray h-full flex flex-col justify-between">
          <View className="p-14 px-6">
           <View className="text-center w-64 m-auto mb-4"><Text className="text-3xl text-lightgray opacity-95 leading-10 font-geistsemibold font-semibold text-center">{t("createpassword")}</Text></View>
           <View className="mb-10">
            <Text className="font-geistregular text-headingcolor text-sm text-center font-normal">{t("typenumber")}</Text>
           </View>
           <View className="mb-5">
            <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("password")}</Text>
            <View className="relative">
            <View className="absolute top-3.5 right-4 z-10"><Icon name='eye-slash' color="#FAFAFA" /></View>
            <View className="bg-popupclr h-11 pr-8 rounded-lg">
             <Input placeholder='Enter Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(value) => { setWalletname(value) }}/>
            </View>
            </View>
           </View>
           <View>
            <Text className="block text-lightgray opacity-70 text-xs uppercase font-geistsemibold font-semibold mb-1">{t("confirmpassword")}</Text>
            <View className="relative">
            <View className="absolute top-3.5 right-4 z-10"><Icon name='eye-slash' color="#FAFAFA" /></View>
            <View className="bg-popupclr h-11 pr-8 rounded-lg">
             <Input placeholder='Enter Confirm Password' placeholderTextColor="#968F8D" inputContainerStyle={[styles.inputOne]} style={[styles.input]} onChangeText={(value) => { setWalletname(value) }}/>
            </View>
            </View>
           </View>
           <View className="opacity-40 mt-8">
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>
               <Text className="text-list text-sm mb-1 font-geistregular"><Icon name='check' color="#9AA2A7" /> {t("characterlistOne")}</Text>
              </ListItem> 
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>  
               <Text className="text-list text-sm mb-1 font-geistregular"><Icon name='check' color="#9AA2A7" /> {t("characterlistTwo")}</Text>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>  
               <Text className="text-list text-sm mb-1 font-geistregular"><Icon name='check' color="#9AA2A7" /> {t("characterlistThree")}</Text>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>  
               <Text className="text-list text-sm mb-1 font-geistregular"><Icon name='check' color="#9AA2A7" /> {t("characterlistFour")}</Text>
              </ListItem>
              <ListItem style={styles.subtitleView} containerStyle={styles.listView}>  
               <Text className="text-list text-sm mb-1 font-geistregular"><Icon name='check' color="#9AA2A7" /> {t("characterlistFive")}</Text>
              </ListItem>
            </View>
          </View>
          <View className="w-full p-5 px-6">
          <Button className="w-full"
              title="Skip"
              buttonStyle={{
                backgroundColor: 'transparent',
                borderWidth:1,
                borderColor:'#514e4e',
                borderRadius: 8,
                height: 48,
                marginBottom:15
              }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            />
           <Button className="w-full"
              title="Continue"
              buttonStyle={{
                backgroundColor: '#E8705C',
                borderRadius: 8,
                height: 48,
              }}
              titleStyle={{ fontFamily: 'JetBrainsMono-SemiBold', fontSize: 16 }}
            />
          </View>
         </View>
        </SafeAreaView> 
    )
}

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
  },
  icon: {
    color: '#fff',
    fontSize: 14,
  },
  subtitleView: {
    color: '#000',
    padding:0
  },
  listView: {
    backgroundColor: 'transparent',
    padding:0,
    marginBottom:5
  }
});

export default AnduroCreatePasswordVC