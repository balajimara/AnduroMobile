

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as bip39 from "bip39"
import BIP32Factory, { BIP32Interface } from "bip32"
import ecc from "@bitcoinerlab/secp256k1"
import * as bitcoin from "bitcoinjs-lib"
import * as chroma from "chromajs-lib"
import networks from "../Config/network.json"
import { deriveKeyFromMnemonic } from "@chainsafe/bls-keygen"
import { getPublicKey } from "@noble/bls12-381"
import { ethers } from "ethers"
import { GetWalletInfoParams } from "../model/AnduroWalletModel"
import { NetworkListModel } from "../model/AnduroNetworkModel"
// import AES from 'react-native-aes-crypto';
import { CachedDataTypes,XpubKeysModel } from "../model/AnduroStorageModel"
const bip32 = BIP32Factory(ecc)
bitcoin.initEccLib(ecc)
chroma.initEccLib(ecc)
import cryptoJS from "react-native-crypto-js"

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
export const decrypteData = (mnemonic: string, xPubKey: string, secretKey: string): string => {
  try {
    let data = mnemonic
    if (xPubKey.length > 0) data = xPubKey
    const decryptedResult = cryptoJS.AES.decrypt(data, secretKey).toString(cryptoJS.enc.Utf8)
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
): { address: string; xPublickey: string; xPrivateKey: string } => {
  if (params.networkType == "bitcoin" || params.networkType == "sidechain") {
    const seed = bip39.mnemonicToSeedSync(params.mnemonic)
    const root = bip32.fromSeed(seed, getNetwork(params.networkMode || "", params.networkType))
    let path = getDerivationPath(params.networkType)
    const account = root.derivePath(path).derive(params.changeIndex)

    const xPublickey = account.neutered().toBase58()
    const xPrivateKey = account.toBase58()

    const node = account.derive(params.derivationIndex)

    const btcAddress = getChainInstance(params.networkType).payments.p2wpkh({
      pubkey: node.publicKey,
      network: getNetwork(params.networkMode || "", params.networkType),
    })
    return {
      address: btcAddress.address || "",
      xPublickey,
      xPrivateKey,
    }
  } else if (params.networkType == "alys") {
    let addressInfo = getAlysAddress(params.mnemonic, params.chromaBookApi || "")
    return addressInfo || ""
  } else {
    return {
      address: "",
      xPublickey: "",
      xPrivateKey: "",
    }
  }
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

export const encrypteData = (dataToEncrypt: any, secretKey: string): string => {
  return cryptoJS.AES.encrypt(dataToEncrypt, secretKey).toString()
}

/**
 * This function is used to encrypt Xpubkey
 * @param mnemonic -mnemonic
 * @param secretKey -secretkey
 * @param networks -networks
 */

export const encryptXpubKey = (
  mnemonic: string,
  secretKey: string,
  networks: NetworkListModel[],
): XpubKeysModel[] => {
  const encryptedXpubKeys: XpubKeysModel[] = []
  const xpubKeys: XpubKeysModel[] = []
  for (let index = 0; index < networks.length; index++) {
    const element =networks [index]
    const walletInfo = getWallet({
      networkType: element.networkType,
      networkMode: element.networkMode,
      derivationIndex: 0,
      changeIndex: 0,
      mnemonic: mnemonic,
      chromaBookApi: element?.chromaBookApi,
    })
    let xpubkey: string = ""
    if (secretKey.length > 0) {
      xpubkey = (walletInfo.xPublickey, secretKey)
    } else {
      xpubkey = walletInfo.xPublickey
    }
    encryptedXpubKeys.push({
      network: element.name,
      xpub: xpubkey,
    })
    xpubKeys.push({
      network: element.name,
      xpub: walletInfo.xPublickey,
    })
  }
  setCachedData(CachedDataTypes.xpubkeys, JSON.stringify(encryptedXpubKeys))
  return xpubKeys
}

/**
 * This function is used to get addresses for alys .
 * @param mnemonic -mnemonic
 * @param baseURL  -baseUrl
 */
export const getAlysAddress = (mnemonic: any, baseURL: string) => {
  let path = getDerivationPath("alys")
  const masterSecretKey = deriveKeyFromMnemonic(mnemonic, path)
  const privateKey = Buffer.from(masterSecretKey).toString("hex")
  const pubKey = Buffer.from(getPublicKey(masterSecretKey)).toString("hex")

  // const address = keccak256(pubKey)
  // let alysaddress = "0x" + address.substring(address.length - 40, address.length)
  const provider = new ethers.JsonRpcProvider(baseURL)
  const signer = new ethers.Wallet(privateKey, provider)
  return {
    address: signer.address,
    xPublickey: pubKey,
    xPrivateKey: privateKey,
  }
}

/**
 * This function is used to decrypt mnemonic key using password
 * @param password -password
 */
export const getMnemonicKey = async (password: string): Promise<string|null> => {
  if (password !== undefined && password != "") {
    const mnemonicKey = decrypteData(
      await getCachedData(CachedDataTypes.mnemonic) || "",
      "",
      password.trim(),
    )
    return mnemonicKey
  } else {
    const mnemonicKey = getCachedData(CachedDataTypes.mnemonic) || ""
    return mnemonicKey
  }
}

/**
 * This is the function used to generate new mnemonic key
 */
export const generateMnemonic = (): string => {
  console.log("time", new Date())
  const mnemonicval: string = bip39.generateMnemonic()
  console.log("mnemonicval", mnemonicval)
  console.log("time1", new Date())
  return mnemonicval
}

