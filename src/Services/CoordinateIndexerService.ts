import axios from "axios"
import { MEMPOOLLIST, MYNFTLIST, UNSPENT_BALANCE, WISHLIST_ADDRESS } from "../Config/CoordinateIndexerApi"
import { APIParamsModel } from "../model/AnduroRequestModel"
import AnduroCommonModel, { nftListOutputModel, nftMempoolListOutputModel, UnspentBalanceResponse } from "../model/AnduroResponseModel"
import AnduroRPCModel from "../model/AnduroRPCModel"
import AnduroUnspentModel, {
    UnspentOutputAPIResponse,
    UnspentOutputModel,
  } from "../model/AnduroUnspentModel"

/**
 * The following function is used for getting list of My NFT from Indexer
 * @param baseURL - Base url of Api
 * @param assetType - Asset Type
 * @param pageNo - Page number
 * @param limit - Limit
 * @param address - Address
 * @param xpub - Extended Public Key
 * @param keyword - keyword
 */
export const getUserNFTList = async (params: APIParamsModel): Promise<nftListOutputModel> => {
    const url = `${params.baseURL + MYNFTLIST}?asset_type=${params.assetType}&page=${
      params.page
    }&limit=${params.limit}&address=&xpub=${params.xpub}&keyword=${params.keyword}`
    return new Promise((resolve) => {
      axios
        .get(url)
        .then((response) => {
          const hasResult = AnduroCommonModel.checkStatus(response.data)
          let parsedResult
          if (hasResult) {
            parsedResult = {
              status: true,
              result: AnduroUnspentModel.parseMyNFTListData(response.data.result, params.baseURL!),
              totalDocs: response.data.total_docs,
            }
          } else {
            parsedResult = {
              status: false,
              totalDocs: 0,
              result: [],
            }
          }
          resolve(parsedResult)
        })
        .catch(() => {
          resolve({
            status: true,
            totalDocs: 0,
            result: [],
          })
        })
    })
  }
  
  /**
   * The following function is used for getting unconfirmed assets list from Indexer
   * @param baseUrl - Base url of Api
   * @param assetType - Asset Type
   * @param address - Address
   * @param xpub - Extended Public Key
   */
  export const getUsermempoolList = async (
    params: APIParamsModel,
  ): Promise<nftMempoolListOutputModel> => {
    const url = `${params.baseURL + MEMPOOLLIST}?asset_type=${params.assetType}&address=${
      params.address
    }&xpub=${params.xpub}`
    return new Promise((resolve) => {
      axios
        .get(url)
        .then((response) => {
          const hasResult = AnduroCommonModel.checkStatus(response.data)
          let parsedResult
          if (hasResult) {
            parsedResult = {
              status: true,
              result: AnduroUnspentModel.parseMempoolListData(response.data.result, params.baseURL!),
            }
          } else {
            parsedResult = {
              status: false,
              result: [],
            }
          }
          resolve(parsedResult)
        })
        .catch(() => {
          resolve({
            status: true,
            result: [],
          })
        })
    })
  }

  /**
 * The following function is used to handle RPC request.
 *
 * @param params - Input parameters
 * @param url - Api url
 *
 */
export const RpcServiceAPI = async (params: any, url: any) => {
    return new Promise((resolve) => {
      axios
        .post(url, params)
        .then((rpcResponse: any) => {
          const hasResult = AnduroCommonModel.checkStatus(
            rpcResponse.data.status ? rpcResponse.data.status : false,
          )
          let parsedResult
          if (hasResult) {
            const parseRpcResponse = AnduroRPCModel.parseRPCResponseData(rpcResponse.data)
            parsedResult = {
              status: parseRpcResponse.status,
              message: parseRpcResponse.status
                ? "Successfully executed the RPC call."
                : "Failed to execute the RPC call.",
              result: parseRpcResponse.result,
              code: parseRpcResponse.code,
            }
          } else {
            parsedResult = {
              status: false,
              message: "Failed to execute the RPC call.",
              result: null,
              code: 0,
            }
          }
          resolve(parsedResult)
        })
        .catch(() => {
          const commonModel = {
            status: false,
            message: "Failed to execute the RPC call.",
            result: null,
          }
          resolve(commonModel)
        })
    })
  }

  /**
 * The following function is used to store the wallet address in the indexer
 * @param params - Parameters
 */
export const wishlistAddressAPI = async (params: any): Promise<{ status: boolean }> => {
    return new Promise((resolve) => {
      axios
        .post(params.baseUrl + WISHLIST_ADDRESS, params)
        .then(() => {
          resolve({
            status: true,
          })
        })
        .catch(() => {
          resolve({ status: false })
        })
    })
  }
  
  /**
 * The following function is used for getting unspent balance from Indexer.
 *
 * @param baseUrl - Base url of Api
 * @param xpub - Extended Public Key
 *
 */
export const getUserUnspentBalance = async (
    params: APIParamsModel,
  ): Promise<UnspentBalanceResponse> => {
    let url = `${params.baseURL + UNSPENT_BALANCE}?xpub=${params.xpub}&address=`
    return new Promise((resolve) => {
      axios
        .get(url)
        .then((response: any) => {
          resolve({
            status: true,
            result: AnduroUnspentModel.parseUnspentBalance(response.data),
          })
        })
        .catch(() => {
          resolve({
            status: false,
            result: {
              pending: 0,
              confirmed: 0,
            },
          })
        })
    })
  }