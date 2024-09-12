import {
  AssetDetailsResponse,
  NftHistoryResponse,
  nftMempoolListResponse,
  UnspentHistoryResponse,
} from "./AnduroResponseModel"
import { convertToAlys } from "../Utility/AndurocommonUtils"
export interface UnspentOutputAPIResponse {
  coinbase: boolean
  confirmations: number
  derviation_index: number
  height: number
  txid: string
  unspent_type: boolean
  value: number
  vout: number
}
export interface UnspentOutputModel {
  status: boolean
  result: UnspentOutputAPIResponse[]
}
export interface AssetUnspentAPIResponse {
  value: string
  changeIndex: number
  coinbase: boolean
  derivation_index: number
  isAsset: number
  is_forward: boolean
  height: string
  txid: string
  vout: number
}
const AnduroUnspentModel = {
  /**
   * This function is used to parse unspent transactions
   * @param unspents - unspent transactions to be parsed
   */
  parseUnspentBalance(response: any) {
    return {
      pending: response ? parseFloat(response.pending) : 0,
      confirmed: response ? parseFloat(response.confirmed) : 0,
    }
  },
  /**
   * This function is used to parse unspent outputs
   * @param unspents - unspent transactions to be parsed
   */
  parseUnspent(unspents: UnspentOutputAPIResponse[]): UnspentOutputAPIResponse[] {
    const unspentData: UnspentOutputAPIResponse[] = []
    const soretedUnspent = unspents.sort((a: any, b: any) => {
      return Number(b.value) - Number(a.value)
    })
    for (let index = 0; index < soretedUnspent.length; index += 1) {
      const element: UnspentOutputAPIResponse = soretedUnspent[index]
      unspentData.push({
        coinbase: element.coinbase,
        confirmations: element.confirmations,
        derviation_index: element.derviation_index,
        height: parseFloat(element.height.toString()),
        txid: element.txid,
        value: parseFloat(element.value.toString()),
        vout: element.vout,
        unspent_type: !!element.unspent_type,
      })
    }
    return unspentData
  },

  /**
   * This function is used to parse transaction history
   * @param response - response
   */
  parseTransactionHistory(history: UnspentHistoryResponse[]): UnspentHistoryResponse[] {
    const historyData: UnspentHistoryResponse[] = []
    for (let index = 0; index < history.length; index += 1) {
      const element = history[index]
      historyData.push({
        address: element.address,
        block_height: parseInt(element.block_height.toString()),
        coinbase: element.coinbase,
        confirmations: element.confirmations,
        tx_type: element.tx_type,
        tx_state: element.tx_state,
        txid: element.txid,
        value: parseInt(element.value.toString()),
        unspent_type: element.unspent_type,
        is_verified: parseInt(element.is_verified.toString(), 10),
        created_at: element.created_at,
      })
    }
    return historyData
  },
  /**
   * This function is used to parse transaction history of alys network which received through api
   * @param response - response
   */
  parseAlysTransactionHistory(response: any) {
    const historyData = []
    for (let index = 0; index < 10; index += 1) {
      const element = response[index]
      if (element !== undefined) {
        historyData.push({
          tx_type: element.tx_types[0],
          txid: element.hash,
          value: parseInt(element.value.toString()),
          created_at: element.timestamp,
        })
      }
    }
    return historyData
  },

  /**
   * This function is used to parse transaction history of alys token based on alys address & token through api
   * @param response - response
   */
  parseAlysTokenTransactionHistory(response: any) {
    const historyData = []
    for (let index = 0; index < 25; index += 1) {
      const element = response[index]
      if (element !== undefined) {
        historyData.push({
          tx_type: element.type,
          txid: element.tx_hash,
          value: convertToAlys(element.total.value),
          symbol: element.token.symbol,
          created_at: element.timestamp,
          from_address: element?.from.hash,
          to_address: element?.to.hash,
        })
      }
    }
    return historyData
  },

  parseAlysBalance(response: any) {
    if (response.coin_balance !== undefined) {
      return parseInt(response.coin_balance)
    } else {
      return 0
    }
  },
  parseAlysTokenList(response: any) {
    const tokenList = []
    for (let index = 0; index < response.length; index += 1) {
      const tokenInfo = response[index].token
      if (tokenInfo.type === "ERC-20") {
        if (tokenInfo.name !== null) {
          tokenList.push({
            name: tokenInfo.name,
            symbol: tokenInfo.symbol,
            balance: convertToAlys(response[index].value.toString()),
            type: tokenInfo.type,
            address: tokenInfo.address,
            usdIcon: "",
            icon: "",
          })
        }
      }
    }
    return tokenList
  },
  /**
   * This function is used to parse preconf transaction history
   * @param response - response
   */
  parseAlysNFTList(response: any) {
    const nftList = []
    for (let index = 0; index < response.items.length; index += 1) {
      const tokenInfo = response.items[index].token
      if (tokenInfo.name !== null) {
        nftList.push({
          name: tokenInfo.name,
          symbol: tokenInfo.symbol,
          balance: response.items[index].value.toString(),
          type: tokenInfo.type,
          address: tokenInfo.address,
          usdIcon: "",
          icon: response.items[index].image_url != null ? response.items[index].image_url : "",
        })
      }
    }
    return nftList
  },

  /**
   * This function is used to parse preconf transaction history
   * @param response - response
   */
  parsePreconfHistory(response: any) {
    const result: any = []
    for (let index = 0; index < response.length; index += 1) {
      const element: any = response[index]
      result.push({
        address: element.address,
        block_height: parseInt(element.block_height),
        coinbase: element.coinbase,
        tx_type: element.tx_type,
        txid: element.txid,
        value: parseInt(element.value),
        created_at: element.created_at,
        totalAllowedFee: parseInt(element.total_allowed_fee),
      })
    }
    return result
  },
  /**
   * This function is used to parse Nftlist data
   * @param baseUrl -Base url of Api
   * @param response  -response
   */
  parseMyNFTListData(response: any, baseURL: string) {
    const NFTDetails: any = []
    for (let index = 0; index < response.length; index += 1) {
      const element = response[index]
      let imgurl = ""
      if (element.image_url) {
        if (element.asset_type !== 2) {
          imgurl = element.image_url
        } else if (element.asset_type === 2) {
          imgurl = `${baseURL}static/${element.genesis_txid}.${element.image_url}`
        }
      }
      NFTDetails.push({
        asset_id: element.asset_id,
        asset_type: element.asset_type,
        name: element.headline,
        image_url: imgurl,
        symbol: element.ticker,
        genesis_txid: element.genesis_txid,
        balance: element.value,
      })
    }
    return NFTDetails
  },

  /**
   * This function is used to parse mempool list data
   * @param baseUrl - Base url of Api
   * @param response - response
   */
  parseMempoolListData(response: any, baseUrl: string): nftMempoolListResponse[] {
    const mempoolList: nftMempoolListResponse[] = []
    for (let index = 0; index < response.length; index += 1) {
      const element = response[index]
      let imgurl
      if (element.asset_type !== 2) {
        imgurl = element.image_url
      } else if (element.asset_type === 2) {
        if (element.image_url) {
          imgurl = `${baseUrl}static/${element.genesis_txid}.${element.image_url}`
        } else {
          imgurl = ""
        }
      }
      mempoolList.push({
        asset_type: element.asset_type,
        image_url: imgurl,
        name: element.headline,
        asset_id: element.id,
        is_confirmed: false,
        genesis_txid: element.genesis_txid,
      })
    }
    return mempoolList
  },

  /**
   * This function is used to parse Nft details data
   * @param response -response
   * @param baseUrl  -Base url of Api
   */
  parseNftDetailsData(response: any, baseUrl: string): NftHistoryResponse[] {
    // const NFTDetails: any = { total_docs: response.total_docs, history: [] }
    const NFTDetails: NftHistoryResponse[] = []
    let imgurl = ""
    let precision = 8
    const assetdetail = response.result.details[0]
    if (assetdetail !== undefined) {
      if (assetdetail.asset_type !== 2) {
        imgurl = assetdetail.image_url
      } else if (assetdetail.asset_type === 2) {
        imgurl = `${baseUrl}static/${assetdetail.genesis_txid}.${assetdetail.image_url}`
      }
      precision = assetdetail.precision
    }

    for (let index = 0; index < 10; index += 1) {
      const element = response.result.history[index]
      if (element !== undefined) {
        NFTDetails.push({
          name: response.result.details[0].headline,
          symbol: response.result.details[0].ticker,
          image_url: imgurl,
          value: parseInt(element.supply, 10),
          txid: element.transaction_id,
          vout: element.vout,
          tx_type: element.transaction_type,
          block_height: parseInt(element.block_height),
          from_address: element.from_address,
          to_address: element.to_address,
          receiver_xpub: element.receiver_xpub,
          precision: precision,
          created_at: element.created_at,
        })
      }
    }
    return NFTDetails
  },

  parseAssetList(response: any) {
    const assetData: AssetDetailsResponse[] = []
    for (let index = 0; index < response.length; index += 1) {
      const element: any = response[index]
      assetData.push({
        asset_id: element.asset_id,
        name: element.headline,
        image_url: element.image_url,
        symbol: element.ticker,
        asset_type: element.asset_type,
        precision: element.precision,
        balance: parseInt(element.value, 10) / 10 ** element.precision,
      })
    }
    return assetData
  },
  /**
   * This function is used to parse asset unspent
   * @param response -response
   */
  parseAssetUnspent(response: AssetUnspentAPIResponse[]): UnspentOutputAPIResponse[] {
    const assetDeatils: UnspentOutputAPIResponse[] = []
    for (let index = 0; index < response.length; index += 1) {
      const element = response[index]
      assetDeatils.push({
        value: parseInt(element.value),
        height: parseInt(element.height),
        derviation_index: element.derivation_index,
        vout: element.vout,
        txid: element.txid,
        coinbase: false,
        confirmations: 0,
        unspent_type: false,
      })
    }
    const soretedAssetUnspent = assetDeatils.sort((a: any, b: any) => {
      return b.value - a.value
    })
    return soretedAssetUnspent
  },
  /**
   * This function is used to parse asset balance
   * @param response -response
   */
  parseAssetBalance(response: any) {
    return {
      assetBalance: parseInt(response.result.asset_balance, 10) / 10 ** response.result.precision,
    }
  },

  /**
   * This function is used to parse Nft details data
   * @param response -response
   * @param baseUrl  -Base url of Api
   */
  parseAssetDetailsData(response: any, baseUrl: string): NftHistoryResponse[] {
    const NFTDeatils: any = []
    let imgurl = ""
    let precision = 8
    for (let index = 0; index < response.result.details.length; index += 1) {
      const element = response.result.details[index]
      if (element.asset_type !== 2) {
        imgurl = element.image_url
      } else if (element.asset_type === 2) {
        imgurl = `${baseUrl}static/${element.genesis_txid}.${element.image_url}`
      }
      precision = element.precision
      NFTDeatils.asset = {
        genesis_txid: element.genesis_txid,
        ticker: element.ticker,
        headline: element.headline,
        asset_type: element.asset_type,
        asset_id: element.asset_id,
        totalSupply: parseInt(element.value, 10),
        currentSupply: parseInt(response.result.user_balance, 10),
        image_url: imgurl,
        precision: element.precision,
      }
    }
    return NFTDeatils
  },
}

export default AnduroUnspentModel
