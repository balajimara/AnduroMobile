import { View, StyleSheet } from 'react-native';
import { Text, Image, ListItem} from "@rneui/themed"
import { useTranslation } from "react-i18next"



interface seedItemProps  {
    title: string,
    subtitle?: string,
    index: number
}

const SeedItemVW = (props: seedItemProps) => {
    const { title, subtitle, index } = props
    const { t } = useTranslation()
    return (
         <View style={styles.boxView} className="flex-row w-full">
          <Text style={styles.titleView}>{index}</Text>
          <Text style={styles.subtitleView}>{title}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
 boxView: {
  borderBottomWidth:1,
  borderColor:'#4e4846'
 },   
 titleView: {
    color: '#fafafa',
    opacity:0.23,
    padding:0,
    width:20
  },
  subtitleView: {
    color: '#fafafa',
    opacity:0.70,
    padding:0,
  }
});
export default SeedItemVW