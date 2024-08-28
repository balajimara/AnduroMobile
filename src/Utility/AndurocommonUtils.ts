import AsyncStorage from '@react-native-async-storage/async-storage';
import networks from "../Config/network.json"
import * as bip39 from 'bip39';


const getNativeCoins = (): string[] => {
  const nativeCoins: string[] = []
  for (let index = 0; index < networks.length; index++) {
    nativeCoins.push(networks[index].name)
  }
  return nativeCoins
}



/**
 * This function is used to get cached data from the local storage.
 * @param key -key name
 */
export const getCachedData = async (key: string): Promise<string | null> => {
  try {
    let value = await AsyncStorage.getItem(key)
    return value
  } catch (error) {
    console.log('error', error)
    return null
  }  
}


/**
 * This function is used to set cached data from the local storage.
 * @param key -key name
 * @param value -value
 */
export const setCachedData = async (key: string, value: string) => {
  return await AsyncStorage.setItem(key, value)
}

/**
 * This is the function used to generate new mnemonic key
 */
export const generateMnemonic = () : string => {
  console.log('time', new Date())
  const mnemonicval: string = bip39.generateMnemonic();
  console.log('mnemonicval', mnemonicval)
  console.log('time1', new Date())
  return mnemonicval;
}