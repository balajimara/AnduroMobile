import { View, Text,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/themed';
import { Navigation } from 'react-native-navigation';

const AnduroCreateTypeVC = (props: any) => {
    return (
       <SafeAreaView> 
        <View className='bg-gray h-full flex flex-col justify-between'>
         <View className="p-14">
          <View className="m-auto my-4 mb-4"><Image resizeMode={'contain'} source={require('../../../assets/images/logo.png')} className="w-60" /></View>
           <View className="w-64 m-auto">
            <Text className="font-geistmedium text-headingcolor text-base text-center leading-6">
            The wallet designed to make your Bitcoin journey seamless.
            </Text>
           </View>
          </View>
          <View className="p-4 pb-5 px-4">
           <View className="mb-3.5">
            <View className="flex flex-col gap-6">
             <View className="bg-accountbg hover:bg-accounthighlightbg hover:border-existaccount hover:border-accounthighlightline border-accountline rounded-xl p-4 px-4 flex flex-col justify-between border">
              <TouchableOpacity onPress={() => { Navigation.push(props.componentId, {
            component: {
              name: 'AnduroSeeds',
              options: {
                topBar: {
                  visible: false,
                },
                bottomTabs: {
                  visible: false,
                }
              }
            }
          })}}>
              <View className="flex flex-row items-center justify-between">
               <View>
                <View className="mb-1.5">
                 <Text className="text-lg text-lightgray leading-5 font-geistregular">New account</Text>
                </View>
                <View>
                 <Text className="font-geistregular text-end text-headingcolor text-xs max-sm:text-left">Create a New Wallet and Recovery Phrase</Text>
                </View>
               </View>
               <View><Icon name='chevron_right' type='material' color="#FAFAFA" /></View>
              </View>
              </TouchableOpacity>
             </View>
            </View>
           </View>
           <View >
            <View className="flex flex-col gap-6">
             <View className="bg-accountbg hover:bg-accounthighlightbg hover:border-existaccount hover:border-accounthighlightline border-accountline rounded-xl p-4 px-4 flex flex-col justify-between border">
              <TouchableOpacity>
              <View className="flex flex-row items-center justify-between">
               <View>
                <View className="mb-1.5">
                 <Text className="text-lg text-lightgray leading-5 font-geistregular">Existing account</Text>
                </View>
                <View>
                 <Text className="font-geistregular text-end text-headingcolor text-xs max-sm:text-left">Restore your Wallet using your Recovery Phrase</Text>
                </View>
               </View>
               <View><Icon name='chevron_right' type='material' color="#FAFAFA" /></View>
              </View>
             </TouchableOpacity>
             </View>
            </View>
           </View>
          </View>
         </View>
       </SafeAreaView> 
    )
}

export default AnduroCreateTypeVC