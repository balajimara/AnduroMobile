import React from "react"
import { Text, TextInput, View } from "react-native"

interface ImportSeedVWProps {
  index: number
  word: string
  onUpdateWord: any
}

const ImportSeedVW: React.FC<ImportSeedVWProps> = ({ index, word, onUpdateWord }) => {
  const handleChange = (text: string) => {
    onUpdateWord(index, text)
  }

  return (
    <View className="form-group mb-2 relative ">
      <TextInput
        className="bg-inputPlaceholder h-10 w-full p-3 pl-9 font-geistsemibold text-white text-xs focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
        value={word}
        onChangeText={handleChange}
      />
      <View className="absolute left-4 top-3 font-geistsemibold font-semibold text-white text-xs">
      <View className="absolute left-4 top-3 font-geistsemibold font-semibold text-white text-xs">
        <Text>{index + 1}</Text>
      </View>
      </View>
    </View>
  )
}

export default ImportSeedVW

