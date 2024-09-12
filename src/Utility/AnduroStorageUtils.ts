import { NetworkListModel } from "../model/AnduroNetworkModel"
import { UnspentBalanceResponse } from "../model/AnduroResponseModel"
import { CachedDataTypes, XpubKeysModel } from "../model/AnduroStorageModel"
import { getUserUnspentBalance } from "../Services/CoordinateIndexerService"
import {
  getMinedBlockCount,
  getDerivationIndex,
  setCachedData,
  convertSatToBTC,
  getAlysBalance,
  wishlistAddress,
} from "./AndurocommonUtils"

/**
 * This function is used to prepare a network list with balance and wishlist addresses.
 * @param networkinfo -networkinfo
 * @param xpubKeys -xpubKeys
 */
export const prepareNetwork = async (
  networkinfo: NetworkListModel[],
  xpubKeys: XpubKeysModel[],
  address: string,
): Promise<NetworkListModel[]> => {
  const deriveInfo: { network: string; derivationIndex: number }[] = []
  const updatedNetworkList: NetworkListModel[] = []
  for (let i = 0; i < networkinfo.length; i++) {
    const network = networkinfo[i]
    const xpubKey = getXpubKey(network.name, xpubKeys)
    network.blockCount = 0
    if (network.networkType == "bitcoin" || network.networkType == "sidechain") {
      network.blockCount = (await getMinedBlockCount(network.chromaBookApi)).height
    } else if (network.networkType == "alys") {
      network.blockCount = 0
    }
    let balanceResult: UnspentBalanceResponse = {
      result: {
        confirmed: 0,
        pending: 0,
      },
    }
    if (network.networkType == "bitcoin" || network.networkType == "sidechain") {
      balanceResult = await getUserUnspentBalance({
        baseURL: network.chromaBookApi,
        xpub: xpubKey,
      })
      network.balance = balanceResult.result.confirmed
      network.pendingBalance = convertSatToBTC(balanceResult.result.pending)
      network.balance = convertSatToBTC(network.balance)
    } else if (network.networkType == "alys") {
      network.balance = await getAlysBalance(address, network.chromaBookApi)
    }

    if (network.networkType !== "alys" && await getDerivationIndex(network.name) === 0) {
      wishlistAddress(network, 0, xpubKeys)
      wishlistAddress(network, 1, xpubKeys)
      wishlistAddress(network, 2, xpubKeys)
      deriveInfo.push({ network: network.name, derivationIndex: 2 })
      network.derivationIndex = 2
    }
    updatedNetworkList.push(network)
  }
  if (deriveInfo.length > 0) {
    setCachedData(CachedDataTypes.derivationIndex, JSON.stringify(deriveInfo))
  }
  return updatedNetworkList
}
/**
 * This function is used to get xpubkey by network.
 * @param networkName -Network name
 * @param xPubkeys -xPubkeys
 */
export const getXpubKey = (networkName: string, xPubkeys: XpubKeysModel[]): string | undefined => {
  for (let index = 0; index < xPubkeys.length; index++) {
    const element = xPubkeys[index]
    if (element.network === networkName) {
      return element.xpub
    }
  }
}

