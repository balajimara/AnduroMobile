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
    <View className="form-group mb-2 relative w-1/2 px-2">
      <TextInput
        className="bg-popupclr border border-backupline rounded-lg h-11 w-full p-3 pl-12 font-geistsemibold text-white text-xs focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
        value={word}
        onChangeText={handleChange}
      />
      <View className="absolute left-11 top-3.5 w-px h-3.5 bg-backupline"></View>
      <View className="absolute left-6 top-3">
       <Text className="font-geistsemibold font-semibold text-lightgray text-xs">{index + 1}</Text>
      </View>
    </View>
  )
}

export default ImportSeedVW
