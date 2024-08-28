import { View, StyleSheet } from "react-native"
import { Text, Image, ListItem } from "@rneui/themed"
import { useTranslation } from "react-i18next"

interface seedItemProps {
  title: string
  subtitle?: string
  index: number
}

const SeedItemVW = (props: seedItemProps) => {
  const { title, subtitle, index } = props
  const { t } = useTranslation()
  return (
    <View className="border-b border-bottomLineTwo flex-row mb-4">
    <Text className="text-walletLight text-sm font-geistregular opacity-25 w-5">{`${index}. `}</Text>
    <Text className="capitalize font-geistmedium text-xs text-walletLight text-sm">
    {title}
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxView: {
    borderBottomWidth: 1,
    borderColor: "#4e4846",
  },
  titleView: {
    color: "#fafafa",
    opacity: 0.23,
    padding: 0,
    width: 20,
  },
  subtitleView: {
    color: "#fafafa",
    opacity: 0.7,
    padding: 0,
  },
})
export default SeedItemVW
