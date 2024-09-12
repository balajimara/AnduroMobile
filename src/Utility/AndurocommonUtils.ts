

import AsyncStorage from '@react-native-async-storage/async-storage';
import BIP32Factory, { BIP32Interface } from "bip32"
import ecc from "@bitcoinerlab/secp256k1"
import * as bitcoin from "bitcoinjs-lib"
import * as chroma from "chromajs-lib"
import networks from "../Config/network.json"
import "react-native-get-random-values"
import { deriveKeyFromEntropy } from "@chainsafe/bls-keygen"
import "@ethersproject/shims"
import { ethers } from "ethers"
import { bls12_381 as bls } from '@noble/curves/bls12-381';
import { GetWalletInfoParams } from "../model/AnduroWalletModel"
import { NetworkListModel } from "../model/AnduroNetworkModel"
import { CachedDataTypes,StorageTypes,XpubKeysModel } from "../model/AnduroStorageModel"
const bip32 = BIP32Factory(ecc)
bitcoin.initEccLib(ecc)
chroma.initEccLib(ecc)
import { NativeModules, Platform } from 'react-native';
import Aes from 'react-native-aes-crypto'
import * as bip39 from "bip39"
import { Buffer } from "@craftzdog/react-native-buffer";
import unorm from "unorm";
import { pbkdf2Sync  } from 'react-native-crypto';
import { Navigation } from 'react-native-navigation';
import { GET_CURRENCY_VALUE, GET_LANGUAGE_LIST, RPC_REQUEST } from '../Config/CoordinateIndexerApi';
import axios from "axios"
import { nftMempoolListOutputModel } from '../model/AnduroResponseModel';
import { getUsermempoolList, RpcServiceAPI, wishlistAddressAPI, } from '../Services/CoordinateIndexerService';
import { GET_BLOCK_COUNT } from '../Config/AnduroRPCMethods';
import { getXpubKey } from "./AnduroStorageUtils"

/**
 * This function is used to get chain instance
 * @param networkType - network type
 *
 */
export const getChainInstance = (networkType: any) => {
  if (networkType === "bitcoin") {
    return bitcoin
  }
  return chroma
}

/**
 * This function is used to get network
 * @param networkMode - networkMode
 * @param networkType -networktype
 *
 */
export const getNetwork = (networkMode: string, networkType: string) => {
  if (networkMode === "test") {
    return getChainInstance(networkType).networks.testnet
  }
  if (networkMode === "main") {
    return getChainInstance(networkType).networks.bitcoin
  }
  return getChainInstance(networkType).networks.regtest
}

/**
 *  This function is used to decrypt data
 * @param mnemonic -seed phrase
 * @param xPubKey -extended public key
 * @param secretKey -secretKey
 */
export const decrypteData = async (mnemonic: string, xPubKey: string, secretKey: string): Promise<string> => {

  try {
    let data = mnemonic
    if (xPubKey.length > 0) data = xPubKey
    let key = await Aes.pbkdf2(secretKey, 'salt', 5000 , 256, 'sha256')
    let decryptedResult = await Aes.decrypt(data, key, "c935a0b1b9094849fe752d343d1f902d", "aes-256-cbc")
    console.log("decryptedResult", decryptedResult)
    if (xPubKey.length > 0) return decryptedResult
    if (bip39.validateMnemonic(decryptedResult)) {
      return decryptedResult
    } else {
      return ""
    }
  } catch (error) {
    return ""
  }

}



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
 * This function is used to get the derivation path.
 * @param networkType -network type
 */
const getDerivationPath = (networkType: string) => {
  let path = "m/84'/0'/0'"
  if (networkType === "sidechain") {
    path = "m/84'/2222'/0'"
  } else if (networkType === "alys") {
    path = "m/12381/3600/0/0"
  }
  return path
}

/**
 * This function is used to get wallet
 * @param networkType -network type
 * @param networkMode -network mode
 * @param derivationIndex  -derivationIndex
 * @param changeIndex -changeindex
 * @param mnemonic -seed phrase
 */
export const getWallet = (
  params: GetWalletInfoParams,
): Promise<{ address: string; xPublickey: string; xPrivateKey: string; name: string}> => {
  return new Promise((resolve, reject) => {
  if (params.networkType == "bitcoin" || params.networkType == "sidechain") {
      const root = bip32.fromSeed(params.seed, getNetwork(params.networkMode || "", params.networkType))
      let path = getDerivationPath(params.networkType)
      const account = root.derivePath(path).derive(params.changeIndex)
      const xPublickey = account.neutered().toBase58()
      const xPrivateKey = account.toBase58()
      const node = account.derive(params.derivationIndex)
      const btcAddress = getChainInstance(params.networkType).payments.p2wpkh({
        pubkey: node.publicKey,
        network: getNetwork(params.networkMode || "", params.networkType),
      })
      resolve( {
        address: btcAddress.address || "",
        xPublickey,
        xPrivateKey,
        name: params.name!
      })
  } else if (params.networkType == "alys") {
    let addressInfo = getAlysAddress(params.mnemonic, params.chromaBookApi || "", params.seed)
    addressInfo.name = params.name!
    resolve( addressInfo || "")
  } else {
    resolve( {
      address: "",
      xPublickey: "",
      xPrivateKey: "",
      name: params.name!
    })
  }
  })
}

/**
 * This function is used to encrypt data
 * @param dataToEncrypt - data to encrypt
 * @param secretKey -secretKey
 */

// export const encrypteData = async (dataToEncrypt: string, secretKey: string) => {
//   console.log("ENCRYPTT DATAAAA===========")
//   const iv = await AES.randomKey(16);
//   const cipher = await AES.encrypt(dataToEncrypt, secretKey, iv, 'aes-256-cbc');
//   return ({
//     cipher,
//     iv,
//   });
// }

export const encrypteData = async (dataToEncrypt: any, secretKey: string): Promise<string> => {
 let key = await Aes.pbkdf2(secretKey, 'salt', 5000 , 256, 'sha256')
 let encrypteData = await Aes.encrypt(dataToEncrypt, key ,"c935a0b1b9094849fe752d343d1f902d" ,"aes-256-cbc")
 return encrypteData
}

/**
 * This function is used to encrypt Xpubkey
 * @param mnemonic -mnemonic
 * @param secretKey -secretkey
 * @param networks -networks
 */

export const encryptXpubKey = async (
  mnemonic: string,
  secretKey: string,
  networks: NetworkListModel[],
): Promise<XpubKeysModel[]> => {
  const encryptedXpubKeys: XpubKeysModel[] = []
  const xpubKeys: XpubKeysModel[] = []
  const promises = [];
  console.log("start seed", new Date())
  const seed = mnemonicToSeed(mnemonic)
  console.log("end seed", new Date())
  for (let index = 0; index < networks.length; index++) {
    const element =networks [index]
    const walletInfo = getWallet({
      networkType: element.networkType,
      networkMode: element.networkMode,
      derivationIndex: 0,
      changeIndex: 0,
      mnemonic: mnemonic,
      chromaBookApi: element?.chromaBookApi,
      name: element.name,
      seed: seed
    })
    promises.push(walletInfo)
  }
  let walletListInfo: string | any[] =  []
  let values = await Promise.all(promises)
  walletListInfo = values
  console.log('values', values)
  // if (alys_network !== undefined) {
  //   walletListInfo.push(alys_address_info)
  // }
  for (let i = 0; i < walletListInfo.length; i ++) {
    let xpubkey: string = ""
    if (secretKey.length > 0) {
      xpubkey = (walletListInfo[i].xPublickey, secretKey)
    } else {
      xpubkey = walletListInfo[i].xPublickey
    }
    encryptedXpubKeys.push({
      network: walletListInfo[i].name,
      xpub: xpubkey,
      address:walletListInfo[i].address
    })
    xpubKeys.push({
      network: walletListInfo[i].name,
      xpub: walletListInfo[i].xPublickey,
      address: walletListInfo[i].address
    })
  }
  await setCachedData(CachedDataTypes.xpubkeys, JSON.stringify(encryptedXpubKeys))
  return xpubKeys




  // let addressInfo = getAlysAddress(mnemonic, alys_network?.chromaBookApi || "")
  // addressInfo.name = alys_network?.name!





}

/**
 * This function is used to get addresses for alys .
 * @param mnemonic -mnemonic
 * @param baseURL  -baseUrl
 */
export const getAlysAddress = (mnemonic: any, baseURL: string, seed: Buffer) => {
  let path = getDerivationPath("alys")
  // const masterSecretKey = deriveKeyFromMnemonic(mnemonic, path)
  // const seed = bip39.mnemonicToSeed(mnemonic)
  const masterSecretKey = deriveKeyFromEntropy(seed, path)
  console.log("inside alys - 2", new Date())
  const privateKey = Buffer.from(masterSecretKey).toString("hex")
  const pubKey = Buffer.from(bls.getPublicKey(masterSecretKey)).toString("hex")
  console.log('pubKey', pubKey)
  // const address = keccak256(pubKey)
  // let alysaddress = "0x" + address.substring(address.length - 40, address.length)
  const provider = new ethers.JsonRpcProvider(baseURL)
  const signer = new ethers.Wallet(privateKey, provider)
  const address = signer.address
  return {
    address: address,
    xPublickey: pubKey,
    xPrivateKey: privateKey,
    name: ''
  }
}

/**
 * This function is used to decrypt mnemonic key using password
 * @param password -password
 */
export const getMnemonicKey = async (password: string): Promise<string|null> => {
  console.log("inside getmnemonic keyy==========")
  if (password !== undefined && password != "") {
    console.log('mnemonicstorage', await getCachedData(CachedDataTypes.mnemonic))
    const mnemonicKey = await decrypteData(
      await getCachedData(CachedDataTypes.mnemonic) || "",
      "",
      password.trim(),
    )
    return mnemonicKey
  } else {
    const mnemonicKey = await getCachedData(CachedDataTypes.mnemonic) || ""
    return mnemonicKey
  }
}

/**
 * This is the function used to generate new mnemonic key
 */
export const generateMnemonic = async () => {
  const mnemonicval: string = bip39.generateMnemonic()
  return mnemonicval
}

/**
 * This function is used to update Xpubkey
 * @param secretKey - secretkey
 */
export const updateXpubKey = async (secretKey: string): Promise<XpubKeysModel[]> => {
  const decryptedXpubKeys: XpubKeysModel[] = []
  const data = await getCachedData(CachedDataTypes.xpubkeys) || "[]"
  const xpubkeys = JSON.parse(data)
  for (let index = 0; index < xpubkeys.length; index++) {
    const element = xpubkeys[index]
    // let key: string = element.xpub
    let key: string = element.xpub
    if (secretKey.length > 0) key = await decrypteData("", element.xpub, secretKey)
    decryptedXpubKeys.push({
      network: element.network,
      xpub: key,
      address: ''
    })
  }
  return decryptedXpubKeys
}


export const mnemonicToSeed = (
  mnemonic: string,
  password: string = ""
) => {
  const mnemonicBuffer = new Buffer(mnemonic, "utf8");
  const saltBuffer = new Buffer(salt(password), "utf8");
  return pbkdf2Sync(mnemonicBuffer, saltBuffer, 2048, 64, "sha512");
}

function salt(password: string) {
  //Using unorm to get proper unicode string, string.normalize might not work well for some verions of browser
  return "mnemonic" + (unorm.nfkd(password) || "");
}

export const showToasterMsg = (type: string, message: string) => {
  Navigation.dismissAllOverlays()
    Navigation.showOverlay({
      component: {
        name: "Toast",
        options: {
          layout: {
            componentBackgroundColor: "transparent",
          },
          overlay: {
            interceptTouchOutside: false,
          },
        },
        passProps: {
          type: type,
          message: message,
        },
      },
    })
}

/**
 * This function is used to validate the password format
 * @param password -password
 * @param confirmPassword -confirmPassword
 */
export const validatePassword = (password: string): boolean => {
  let isValidPassword = true
  const passwordRegex = [/.{8,}/, /[A-Z]/, /[a-z]/, /\d/]
  for (let i = 0; i < passwordRegex.length; i++) {
    if (!passwordRegex[i].test(password)) isValidPassword = false
  }
  return isValidPassword
}

/**
 * This function is used to verifying user has password
*/
export const checkPassword = async () => {
  let mnemonicKey = await getCachedData(CachedDataTypes.mnemonic) || ""
  return !bip39.validateMnemonic(mnemonicKey)
}

/* This function is used to get currency list
* @param chromaBookApi -chromabook api
*/

export const getMultiCurrency = async (chromaBookApi: string, networkMode: string) => {
 const currencyResult = await axios.get(chromaBookApi + GET_CURRENCY_VALUE)
 let currencyList = []
 for (let i = 0; i < currencyResult.data.result.length; i++) {
   let element = currencyResult.data.result[i]
   currencyList.push(element)
 }
 return currencyResult.data.status ? currencyList : []
}

/**
 * This function is used to get language list
 * @param chromaBookApi -chromabook api
 */

export const getMultiLanguage = async (chromaBookApi: string) => {
  const result = await axios.get(chromaBookApi + GET_LANGUAGE_LIST)
  return result.data.status ? result.data.result : []
}

/**
 * This function is used to get currency list
 * @param chromaBookApi -chromabook api
 */
export const getFiatCurrency = async (chromaBookApi: string) => {
  try {
    const currencyResult = await axios.get(chromaBookApi + GET_CURRENCY_VALUE)
    return currencyResult.data.status ? currencyResult.data.result : []
  } catch (error) {
    return []
  }
}

/**
 * This function is used to get the bitcoin price in Doller and update the cache.
 * @param currency -currency
 * @param chromaBookApi -chromabook api
 */
export const getFiatValues = async (params: {
  currency: string
  networklist: NetworkListModel[]
}): Promise<number> => {
  let currenctCurrencyValue = 0
  for (let i = 0; i < params.networklist.length; i++) {
    const network = params.networklist[i]
    const multiCurrency = await getFiatCurrency(network.chromaBookApi)
    for (let index = 0; index < multiCurrency.length; index += 1) {
      const element = multiCurrency[index]
      if (element.currency === params.currency) {
        currenctCurrencyValue = element.value
        break
      }
    }
    if (currenctCurrencyValue > 0) break
  }
  return currenctCurrencyValue
}

/**
 * This function is used to get active networks.
 * @param networks - networks
 * @returns
 */
export const getActiveNetworks = (
  networks: NetworkListModel[],
  activeNtiveCoins: { name: string; networkVersion: string }[],
  developerMode: boolean,
  selectedNetworkVersion: string,
): { activeNetworks: NetworkListModel[]; isConvertEnabled: boolean } => {
  let activeNetworks: NetworkListModel[] = []
  let isConvertEnabled: boolean = false
  const activeChains: string[] = []
  for (let j = 0; j < activeNtiveCoins.length; j++) {
    if (activeNtiveCoins[j].networkVersion == selectedNetworkVersion) {
      activeChains.push(activeNtiveCoins[j].name)
    }
  }
  for (let i = 0; i < networks.length; i++) {
    const element = networks[i]
    let hasActive: boolean = element.networkVersion === selectedNetworkVersion
    if (!hasActive) continue
    if (
      activeChains.includes(element.name) &&
      ((developerMode && element.isSandbox) || (!developerMode && !element.isSandbox))
    ) {
      activeNetworks.push(element)
      if (element.networkType === "bitcoin") isConvertEnabled = true
    }
  }
  if (isConvertEnabled) isConvertEnabled = activeNetworks.length > 1
  return {
    activeNetworks,
    isConvertEnabled,
  }
}


/**
 * This function is used to get Preconf transaction history.
 * @param network -network
 * @param chromaBookApi -chromabook api
 * @param xPubKey -extended public key
 */

export const getMempoolNftList = async (
  chromaBookApi: string,
  xpubKey: string,
  assetType: number,
): Promise<nftMempoolListOutputModel> => {
  const nftsResponse: nftMempoolListOutputModel = await getUsermempoolList({
    baseURL: chromaBookApi,
    xpub: xpubKey,
    assetType: assetType,
    page: 1,
    limit: 10,
  })
  return nftsResponse
}

/**
 * This function is used to convert value to ALYS format
 * @param value - The value to be converted to BTC format
 */
export const convertToAlys = (value: number): number => {
  return parseFloat(convertValueToEther(value))
}



/**
 * This function is used to convert wei value to Ether.
 * @param Wei - wei value from api
 */
export const convertValueToEther = (value: number): any => {
  if (isNaN(value)) {
    return 0
  } else {
    const ethvalue = ethers.formatEther(value.toString())
    return ethvalue
  }
}

/**
 * This function is used to  get mined blockcount
 * @param chromaBookApi - chromabook base URL
 */
export const getMinedBlockCount = async (
  chromaBookApi: string,
): Promise<{ status: boolean; height: number }> => {
  const params = getRpcParams(GET_BLOCK_COUNT, [], "anduro")
  const result: any = await RpcServiceAPI(params, chromaBookApi + RPC_REQUEST)
  return {
    status: result.status,
    height: result.status ? result.result : 0,
  }
}

/**
 * This function is used to get derivation index by network
 * @param network -network
 */
export const getDerivationIndex = async (network: string): Promise<number> => {
  const deriveInfo = JSON.parse(await getCachedData(CachedDataTypes.derivationIndex) || "[]")
  let index: number = 0
  for (let i = 0; i < deriveInfo.length; i++) {
    const element = deriveInfo[i]
    if (element.network === network) {
      index = element.derivationIndex
      break
    }
  }
  return index
}

/**
 * This function is used to convert Sat to BTC.
 * @param Balance - balance
 */
export const convertSatToBTC = (balance: number): number => {
  if (isNaN(balance)) {
    return 0
  } else {
    return balance / 10 ** 8
  }
}

/**
 *This function is used to get rpc params
 * @param method -rpc method
 * @param value - value
 */
 export const getRpcParams = (
  method: string,
  value: any,
  node: string,
): { params: string; node: string } => {
  return {
    params: `{'jsonrpc': '1.0','id': 'curltest','method': '${method}','params':[${value}]}`,
    node: node,
  }
}

export const getAlysBalance = async (address: string, url: any) => {
  try {
    const provider = new ethers.JsonRpcProvider(url)
    const result = await provider.getBalance(address)
    return Number(ethers.formatEther(result))
  } catch (error) {
    return 0
  }
}


/**
 * This function is used to wishlist addresses.
 * @param networkInfo -networkInfo
 * @param derivationIndex -derivationIndex
 * @param xpubKeys -xpubKeys
 */
export const wishlistAddress = async (
  networkInfo: NetworkListModel,
  derivationIndex: number,
  xpubKeys: XpubKeysModel[],
) => {
  const xpubKey = getXpubKey(networkInfo.name, xpubKeys)
  let params = {
    xpub: xpubKey || "",
    address: "",
    derivation_index: derivationIndex,
    baseUrl: networkInfo.chromaBookApi,
  }
  if (networkInfo.networkType == "bitcoin" || networkInfo.networkType == "sidechain") {
    await wishlistAddressAPI(params)
  } else if (networkInfo.name == "alys") {
    return { status: true }
  }
}